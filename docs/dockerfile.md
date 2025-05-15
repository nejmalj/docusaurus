---
id: dockerfile
title: Le Dockerfile
sidebar_position: 4
---

# Le Dockerfile

Un `Dockerfile` décrit comment construire une image Docker.

## Exemple de structure

```Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8080
CMD ["node", "server.js"]
```

## Détails des instructions

**FROM :** Image de base (ex : Node, Alpine, Ubuntu)

**WORKDIR :** Répertoire de travail dans l’image

**COPY :** Copier les fichiers dans le conteneur

**RUN :** Exécuter une commande à la construction

**EXPOSE :** Déclaration du port utilisé par l’app

**CMD :** Commande exécutée au lancement du conteneur