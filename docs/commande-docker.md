---
id: commandes-docker
title: Commandes Docker
sidebar_position: 5
---

# Commandes Docker de base

## Image vs Conteneur

| Terme      | Description |
|------------|-------------|
| Image      | Recette statique d'une application |
| Conteneur  | Instance en cours d'exécution d'une image |

> Une image peut être utilisée pour lancer plusieurs conteneurs.

## `.dockerignore`

Permet d’exclure certains fichiers lors du build (comme `.gitignore`).

## Commandes essentielles

```bash
# Construire une image
docker build . -t <username>/mon-app

# Lancer un conteneur en arrière-plan avec port mappé
docker run -p 49160:8080 -d <username>/mon-app

# Accéder à un conteneur en cours
docker exec -it <container_id> /bin/bash
