#!/usr/bin/env bash
# =======================================================
# Alvecom — Script de déploiement VPS (Nginx + PM2)
# =======================================================
# Usage prod : ssh deploy@vps "cd /var/www/alvecom && ./deploy.sh"
# Usage dev  : ssh root@vps "cd /var/www/dev.alvecom && APP_NAME=alvecom-dev ECOSYSTEM_FILE=ecosystem.dev.config.cjs ./deploy.sh"
# Pré-requis : Node >= 20, PM2, Git, accès SSH à l'origine.
# Variables configurables :
#   APP_NAME        (default: alvecom)
#   BRANCH          (default: main)
#   ECOSYSTEM_FILE  (default: ecosystem.config.cjs)
# =======================================================

set -euo pipefail

APP_NAME="${APP_NAME:-alvecom}"
APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BRANCH="${BRANCH:-main}"
ECOSYSTEM_FILE="${ECOSYSTEM_FILE:-ecosystem.config.cjs}"
PM2="$(command -v pm2 || echo "$HOME/.npm-global/bin/pm2")"

echo "▶ Déploiement ${APP_NAME} dans ${APP_DIR} (branche ${BRANCH}, ecosystem ${ECOSYSTEM_FILE})"

cd "${APP_DIR}"

if [ ! -f ".env" ]; then
  echo "✖ Fichier .env manquant. Copiez .env.example vers .env et renseignez les variables."
  exit 1
fi

if [ ! -f "${ECOSYSTEM_FILE}" ]; then
  echo "✖ Fichier ecosystem introuvable : ${ECOSYSTEM_FILE}"
  exit 1
fi

echo "▶ git fetch & reset sur origin/${BRANCH}"
git fetch --all --prune
git reset --hard "origin/${BRANCH}"

echo "▶ Installation des dépendances (npm ci)"
npm ci --omit=dev=false

echo "▶ Build Next.js (production)"
npm run build

echo "▶ Redémarrage PM2 (app: ${APP_NAME})"
if "${PM2}" list | grep -q "${APP_NAME}"; then
  "${PM2}" reload "${ECOSYSTEM_FILE}" --update-env --only "${APP_NAME}"
else
  "${PM2}" start "${ECOSYSTEM_FILE}" --update-env --only "${APP_NAME}"
fi

"${PM2}" save

echo "✔ Déploiement terminé avec succès — $(date +'%F %T')"
