#!/usr/bin/env bash
# =======================================================
# Alvecom — Script de déploiement VPS (Nginx + PM2)
# =======================================================
# Usage : ssh deploy@vps "cd /var/www/alvecom && ./deploy.sh"
# Pré-requis : Node >= 20, PM2, Git, accès SSH à l'origine.
# =======================================================

set -euo pipefail

APP_NAME="alvecom"
APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BRANCH="${BRANCH:-main}"
PM2="$(command -v pm2 || echo "$HOME/.npm-global/bin/pm2")"

echo "▶ Déploiement ${APP_NAME} dans ${APP_DIR} (branche ${BRANCH})"

cd "${APP_DIR}"

if [ ! -f ".env" ]; then
  echo "✖ Fichier .env manquant. Copiez .env.example vers .env et renseignez les variables."
  exit 1
fi

echo "▶ git fetch & reset sur origin/${BRANCH}"
git fetch --all --prune
git reset --hard "origin/${BRANCH}"

echo "▶ Installation des dépendances (npm ci)"
npm ci --omit=dev=false

echo "▶ Build Next.js (production)"
npm run build

echo "▶ Redémarrage PM2"
if "${PM2}" list | grep -q "${APP_NAME}"; then
  "${PM2}" reload ecosystem.config.cjs --update-env
else
  "${PM2}" start ecosystem.config.cjs --update-env
fi

"${PM2}" save

echo "✔ Déploiement terminé avec succès — $(date +'%F %T')"
