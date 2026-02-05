#!/usr/bin/env bash
# Run this ONCE on the server (157.230.35.120) to prepare for CI/CD deploys.
# Usage: sudo bash setup-server.sh
# Requires: Node.js 18+, git, and a GitHub repo URL (set GITHUB_REPO below or pass as env).

set -e
APP_DIR="${APP_DIR:-/var/www/webhubasia}"
GITHUB_REPO="${GITHUB_REPO:-https://github.com/YOUR_ORG/portfolio.git}"  # replace with your repo URL
NODE_VERSION="${NODE_VERSION:-18}"

echo "==> Creating app directory $APP_DIR"
mkdir -p "$APP_DIR"
chown -R "$(whoami):$(whoami)" "$APP_DIR" 2>/dev/null || true

echo "==> Cloning repository (if not already cloned)"
if [ ! -d "$APP_DIR/.git" ]; then
  git clone "$GITHUB_REPO" "$APP_DIR"
  cd "$APP_DIR"
else
  cd "$APP_DIR"
  git fetch origin
fi

echo "==> Installing dependencies and building"
npm ci
npm run build

echo "==> Setting up PM2"
if ! command -v pm2 &>/dev/null; then
  echo "Install PM2 first: npm i -g pm2"
  exit 1
fi
pm2 delete webhubasia 2>/dev/null || true
pm2 start npm --name webhubasia -- start
pm2 save
pm2 startup | tail -1

echo "==> Done. Ensure nginx proxies webhubasia.com to http://127.0.0.1:3000"
