# Deploy webhubasia.com via GitHub Actions

Deploy the Next.js app to **157.230.35.120** (webhubasia.com) on every push to `main`.

---

## 1. One-time server setup (157.230.35.120)

SSH into your server and run the following.

### 1.1 Install Node.js 18+, Git, PM2

```bash
# Ubuntu/Debian example
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs git
sudo npm install -g pm2
```

### 1.2 Create app directory and clone repo

```bash
sudo mkdir -p /var/www/webhubasia
sudo chown $USER:$USER /var/www/webhubasia
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git /var/www/webhubasia
cd /var/www/webhubasia
npm ci
npm run build
pm2 start npm --name webhubasia -- start
pm2 save
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u $USER --hp $HOME
```

Replace `YOUR_USERNAME/YOUR_REPO` with your GitHub repo (e.g. `webhub-asia/portfolio`).

**If the repo is private:** On the server, add a **GitHub Deploy Key** (read-only) so `git pull` works. In GitHub: repo **Settings → Deploy keys → Add deploy key**. Paste the server’s `~/.ssh/id_ed25519.pub` (or generate a key pair for this repo and add the public part). Use the same key for `git clone` over SSH, e.g. `git clone git@github.com:YOUR_USERNAME/YOUR_REPO.git /var/www/webhubasia`.

### 1.3 Create deploy SSH key (for GitHub Actions)

On the **server**:

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/deploy_webhubasia -N ""
cat ~/.ssh/deploy_webhubasia.pub >> ~/.ssh/authorized_keys
cat ~/.ssh/deploy_webhubasia   # copy this ENTIRE output (private key)
```

- Add the **private key** (`~/.ssh/deploy_webhubasia` contents) to GitHub Secrets (step 2 below).
- The **public key** is already in `authorized_keys` so this server can accept logins with that key.

### 1.4 Nginx reverse proxy + HTTPS (SSL)

Install nginx, then create the site config **before** getting the certificate (Certbot needs nginx running with the domain):

```bash
sudo apt install -y nginx
sudo nano /etc/nginx/sites-available/webhubasia.com
```

Paste this (HTTP only first; Certbot will add SSL in the next step):

```nginx
server {
    listen 80;
    server_name webhubasia.com www.webhubasia.com;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable and start nginx:

```bash
sudo ln -sf /etc/nginx/sites-available/webhubasia.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

**Ensure DNS:** Point `webhubasia.com` and `www.webhubasia.com` to **157.230.35.120** (A records) before the next step.

### 1.5 HTTPS / SSL with Let's Encrypt

Install Certbot and obtain a free SSL certificate. Certbot will automatically adjust your nginx config for HTTPS and add a redirect from HTTP to HTTPS:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d webhubasia.com -d www.webhubasia.com --non-interactive --agree-tos -m YOUR_EMAIL@example.com
```

Replace `YOUR_EMAIL@example.com` with your email (used for expiry notices).

After this, nginx will:
- Serve the site over **HTTPS** on port 443.
- Redirect **HTTP** (port 80) to HTTPS.
- Use certificates in `/etc/letsencrypt/live/webhubasia.com/`.

**Auto-renewal:** Certbot adds a systemd timer. Test renewal with:

```bash
sudo certbot renew --dry-run
```

To renew manually later: `sudo certbot renew && sudo systemctl reload nginx`.

---

## 2. GitHub repository secrets

In your GitHub repo: **Settings → Secrets and variables → Actions → New repository secret.**

Add:

| Name               | Value                                      | Required |
|--------------------|--------------------------------------------|----------|
| `DEPLOY_SSH_KEY`   | Full contents of `~/.ssh/deploy_webhubasia` (private key) on server | Yes      |
| `SERVER_USER`      | SSH user (e.g. `root` or `ubuntu`)         | Yes      |
| `SERVER_SSH_PORT`  | `22` (or your custom SSH port)             | No       |

If you use a different path on the server, edit `.github/workflows/deploy.yml` and change `APP_DIR` under `env:`.

---

## 3. Deploy

- **Automatic:** Push (or merge) to the `main` branch. The workflow will SSH into the server, pull latest, run `npm ci`, `npm run build`, and restart PM2.
- **Manual:** Repo **Actions** tab → **Deploy to production** → **Run workflow**.

---

## 4. Optional: run SSL setup from repo

From the server (after cloning the repo and enabling the nginx HTTP config):

```bash
cd /var/www/webhubasia
EMAIL=admin@webhubasia.com sudo bash scripts/setup-ssl.sh
```

This installs Certbot and runs it for `webhubasia.com` and `www.webhubasia.com`.

---

## 5. Troubleshooting

- **Permission denied (publickey):** Ensure `DEPLOY_SSH_KEY` is the full private key (including `-----BEGIN ... KEY-----` and `-----END ... KEY-----`) and `SERVER_USER` matches a user that has the deploy key in `~/.ssh/authorized_keys`.
- **npm ci / build fails on server:** SSH in and run `cd /var/www/webhubasia && npm ci && npm run build` to see the error. Ensure Node version is 18+ (`node -v`).
- **Site not loading:** Check `pm2 status` and `pm2 logs webhubasia`. Ensure nginx is proxying to `http://127.0.0.1:3000` and `server_name` includes your domain.
- **SSL / certbot fails:** Ensure DNS for `webhubasia.com` and `www.webhubasia.com` points to 157.230.35.120. Port 80 must be open. Run `sudo certbot --nginx -d webhubasia.com -d www.webhubasia.com -v` to see detailed errors.
- **Mixed content or redirect loop:** In the app, use `X-Forwarded-Proto` (already set in the nginx config) so links stay HTTPS. Next.js with `trustHost: true` or behind a proxy usually handles this; if you use absolute URLs, use `https://` or relative paths.
- **Change server or app path:** Update `SERVER_HOST` and `APP_DIR` in `.github/workflows/deploy.yml`, or use repository secrets `SERVER_HOST` and `APP_DIR` and reference them in the workflow if you add that logic.
