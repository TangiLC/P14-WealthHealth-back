# Back-end du projet 14 OpenClassrooms (Wealth Health HRnet)

![Wealth Health Logo](./data/WH_logo.png)

Ce back-end simplifié permet l'accès et la modification d'une base de données employés (data/employees.json) sur le port 3003 pour interagir avec le front-end.

## Prérequis DOCKER

Ce back-end peut être containeurisé avec Docker. Vous pouvez télécharger puis l'installer à partir du site officiel de Docker : [Docker](https://www.docker.com/get-started)

## Étapes à suivre Avec Docker

1. **Cloner ce projet**

```bash
git clone https://github.com/TangiLC/P14-WealthHealth-back
```

2. **Création de l'image avec DockerFile**

Dans le terminal, taper la commande suivante pour créer le build

```bash
docker build -t p14_back .
```

>...What's Next?

3. **Lancement de l'application avec DockerCompose**

Dans le terminal, taper la commande suivante pour démarrer l'app dans le container

```bash
docker-compose up
```

>*Le back-end containeurisé tourne sur le port 3003*

______

## Étapes à suivre Sans Docker

1. **Cloner ce projet**

```bash
git clone https://github.com/TangiLC/P14-WealthHealth-back
```

2. **Mettre à jour les dépendances**

Dans le terminal, lancer la commande

```bash
npm i
```

3. **Lancement de l'application**

Dans le terminal, lancer la commande

```bash
npm run start
```

>*Le back-end tourne sur le port 3003 dans votre environnement*

______

## Ajout du projet Front-end

Le projet Front-end associé à ce dépôt se trouve ici :[https://github.com/TangiLC/P14-WealthHealth-front](https://github.com/TangiLC/P14-WealthHealth-front)


