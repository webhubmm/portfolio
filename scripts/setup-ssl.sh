#!/usr/bin/env bash
# Run ONCE on the server to enable HTTPS for webhubasia.com with Let's Encrypt.
# Prerequisites: nginx installed and site config for webhubasia.com already enabled (listen 80).
# DNS for webhubasia.com and www.webhubasia.com must point to this server.
#
# Usage: sudo bash scripts/setup-ssl.sh
# Or:    sudo EMAIL=admin@webhubasia.com bash scripts/setup-ssl.sh

set -e
DOMAIN="${DOMAIN:-webhubasia.com}"
WWW="${WWW:-www.webhubasia.com}"
EMAIL="${EMAIL:-}"

if [ -z "$EMAIL" ]; then
  echo "Set your email for Let's Encrypt notifications:"
  echo "  EMAIL=your@email.com sudo bash scripts/setup-ssl.sh"
  exit 1
fi

echo "==> Installing Certbot (nginx plugin)"
apt-get update -qq
apt-get install -y certbot python3-certbot-nginx

echo "==> Obtaining SSL certificate for $DOMAIN and $WWW"
certbot --nginx -d "$DOMAIN" -d "$WWW" --non-interactive --agree-tos -m "$EMAIL"

echo "==> Testing auto-renewal"
certbot renew --dry-run

echo "==> Done. HTTPS is enabled. HTTP redirects to HTTPS."
