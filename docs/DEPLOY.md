# Deploy webhubasia.com from scratch

Step-by-step guide to deploy the Next.js app to **157.230.35.120** with **webhubasia.com**, **HTTPS**, and **GitHub Actions** CI/CD.

---

## Prerequisites (do these first)

- A server at **157.230.35.120** (Ubuntu/Debian) with SSH access.
- Your code in a **GitHub** repository (e.g. `YOUR_USERNAME/portfolio`).
- Domain **webhubasia.com** (you can create DNS records).

---

## Step 1 — DNS

Point the domain to your server **before** requesting SSL.

1. In your domain registrar (e.g. Namecheap, Cloudflare, GoDaddy), open DNS settings for **webhubasia.com**.
2. Add or edit **A** records:

   | Type | Name/Host | Value        | TTL  |
   |------|-----------|--------------|------|
   | A    | `@`       | 157.230.35.120 | 300  |
   | A    | `www`     | 157.230.35.120 | 300  |

3. Wait 5–30 minutes, then check (from your laptop):

   ```bash
   dig webhubasia.com +short
   dig www.webhubasia.com +short
   ```

   Both should print: **157.230.35.120**.

---

## Step 2 — Open ports on the server (firewall)

Let's Encrypt and visitors need to reach your server on **80** and **443**.

**If you use a cloud firewall** (DigitalOcean, Linode, AWS, Vultr, etc.):

- In the provider dashboard, open **inbound** TCP ports **80** and **443** (source: anywhere / 0.0.0.0/0).

**On the server** (optional; only if you use UFW):

```bash
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
sudo ufw status
```

---

## Step 3 — Push the project to GitHub

On your **local machine** (in the project folder):

```bash
git remote -v   # ensure origin points to your GitHub repo
git push -u origin main
```

If the repo is new, create it on GitHub first, then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME/YOUR_REPO` with your repo (e.g. `webhub-asia/portfolio`).

---

## Step 4 — One-time server setup (SSH into 157.230.35.120)

From your laptop:

```bash
ssh YOUR_USER@157.230.35.120
```

Replace `YOUR_USER` with your SSH user (e.g. `root` or `ubuntu`). Then run the steps below **on the server**.

---

### Step 4.1 — Install Node.js 18+, Git, PM2

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get update
sudo apt-get install -y nodejs git
sudo npm install -g pm2
node -v   # should be v18.x or higher
```

---

### Step 4.2 — Create app directory and clone repo

```bash
sudo mkdir -p /var/www/webhubasia
sudo chown $USER:$USER /var/www/webhubasia
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git /var/www/webhubasia
cd /var/www/webhubasia
```

**If the repo is private:** Use SSH and a deploy key.

- On the server: `cat ~/.ssh/id_ed25519.pub` (or create a key with `ssh-keygen -t ed25519 -C "deploy" -f ~/.ssh/deploy -N ""`).
- In GitHub: repo **Settings → Deploy keys → Add deploy key**; paste the public key.
- Clone with: `git clone git@github.com:YOUR_USERNAME/YOUR_REPO.git /var/www/webhubasia`

Then:

```bash
cd /var/www/webhubasia
npm ci
npm run build
pm2 start npm --name webhubasia -- start
pm2 save
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u $USER --hp $HOME
```

---

### Step 4.3 — Install Nginx and create site config

```bash
sudo apt install -y nginx
sudo nano /etc/nginx/sites-available/webhubasia.com
```

Paste this (replace nothing for now):

```nginx
server {
    listen 80;
    server_name webhubasia.com www.webhubasia.com;

    location ^~ /.well-known/acme-challenge/ {
        default_type "text/plain";
        root /var/lib/letsencrypt;
    }

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

Save and exit (e.g. Ctrl+O, Enter, Ctrl+X in nano).

Create the ACME challenge directory and enable the site:

```bash
sudo mkdir -p /var/lib/letsencrypt/.well-known/acme-challenge
sudo chown -R www-data:www-data /var/lib/letsencrypt
sudo ln -sf /etc/nginx/sites-available/webhubasia.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

---

### Step 4.4 — Get SSL certificate (HTTPS)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d webhubasia.com -d www.webhubasia.com --non-interactive --agree-tos -m YOUR_EMAIL@example.com
```

Replace `YOUR_EMAIL@example.com` with your real email (e.g. `htetmyatsoe492@gmail.com`).

Check:

```bash
sudo certbot renew --dry-run
```

After this, **https://webhubasia.com** and **https://www.webhubasia.com** should load and HTTP should redirect to HTTPS.

---

### Step 4.5 — Create deploy key for GitHub Actions

On the **server**:

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/deploy_webhubasia -N ""
cat ~/.ssh/deploy_webhubasia.pub >> ~/.ssh/authorized_keys
cat ~/.ssh/deploy_webhubasia
```

Copy the **entire** output of the last command (including `-----BEGIN ... KEY-----` and `-----END ... KEY-----`). You will paste it into GitHub in the next step.

---

## Step 5 — Add GitHub Secrets

1. Open your repo on GitHub → **Settings → Secrets and variables → Actions**.
2. **New repository secret** for each:

   | Name             | Value                                              |
   |------------------|----------------------------------------------------|
   | `DEPLOY_SSH_KEY` | Paste the full private key from Step 4.5           |
   | `SERVER_USER`    | Your SSH user (e.g. `root` or `ubuntu`)            |
   | `SERVER_SSH_PORT`| `22` (only if you use a non-default SSH port)      |

---

## Step 6 — Deploy

- **Automatic:** Push to `main`:
  ```bash
  git add -A && git commit -m "Deploy" && git push origin main
  ```
- **Manual:** On GitHub → **Actions** → **Deploy to production** → **Run workflow**.

The workflow will SSH to the server, pull latest, run `npm ci`, `npm run build`, and restart PM2.

---

## Step 7 — Verify

- Open **https://webhubasia.com** and **https://www.webhubasia.com** in a browser.
- Check **Actions** in GitHub to confirm the last run succeeded.

---

## Mail (contact form)

The contact form uses [Resend](https://resend.com) (no SMTP, no port 587). Set in `.env.local` and on the server:

| Variable | Example | Required |
|----------|---------|----------|
| `RESEND_API_KEY` | from [Resend dashboard](https://resend.com/api-keys) | Yes |
| `RESEND_FROM_EMAIL` | `WebHub Asia <noreply@webhubasia.com>` | No (defaults to Resend test sender) |

1. Create an API key at [resend.com/api-keys](https://resend.com/api-keys).
2. In Resend, add and verify your domain (e.g. webhubasia.com) so you can send from `noreply@webhubasia.com`.
3. Set `RESEND_FROM_EMAIL="WebHub Asia <noreply@webhubasia.com>"` in production.

Messages are sent to `htetmyatsoe126@gmail.com` with CC to `nyiwinkhant.design@gmail.com`.

---

## Summary checklist

| Step | What |
|------|------|
| 1 | DNS A records: `@` and `www` → 157.230.35.120 |
| 2 | Open ports 80 and 443 (cloud firewall and/or UFW) |
| 3 | Push code to GitHub `main` |
| 4 | Server: Node, Git, PM2, clone repo, `npm ci && npm run build`, PM2 start |
| 4 | Server: Nginx + site config + ACME path, reload nginx |
| 4 | Server: Certbot for webhubasia.com + www → HTTPS |
| 4 | Server: Deploy SSH key → copy private key |
| 5 | GitHub Secrets: `DEPLOY_SSH_KEY`, `SERVER_USER` |
| 6 | Push to `main` or run workflow → deploy |
| 7 | Visit https://webhubasia.com |

---

## Troubleshooting

- **Permission denied (publickey):** `DEPLOY_SSH_KEY` must be the full private key; `SERVER_USER` must be the user that has that key in `~/.ssh/authorized_keys`.
- **Certbot 404 on `.well-known/acme-challenge`:** Ensure the nginx config has the `location ^~ /.well-known/acme-challenge/` block and you ran `sudo mkdir -p /var/lib/letsencrypt/.well-known/acme-challenge` and `sudo chown -R www-data:www-data /var/lib/letsencrypt`, then `sudo nginx -t && sudo systemctl reload nginx`.
- **Certbot "Connection refused" when fetching https://.../.well-known/acme-challenge:** Nginx is redirecting HTTP to HTTPS before you have a certificate, so the validator hits port 443 and nothing is listening. **Fix:** Remove any HTTP→HTTPS redirect from your nginx config so port 80 serves the site (and the challenge) without redirecting. Ensure the `server { listen 80; ... }` block has **no** `return 301 https://...` and no `if` that redirects to HTTPS. Then `sudo nginx -t && sudo systemctl reload nginx` and run certbot again. Certbot will add the redirect after it gets the cert.
- **Certbot timeout / connection:** Port 80 must be reachable from the internet. Open TCP 80 (and 443) in the **cloud provider** firewall and/or UFW. Check DNS with `dig webhubasia.com +short`.
- **Site not loading:** On server: `pm2 status`, `pm2 logs webhubasia`, and `sudo nginx -t`; ensure nginx proxies to `http://127.0.0.1:3000`.
- **Build fails on deploy:** SSH in and run `cd /var/www/webhubasia && npm ci && npm run build` to see the error; ensure Node 18+ (`node -v`).
