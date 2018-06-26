# TD Basic Blog

### Configuration
- nodejs
- mongodb

#### 1. Créer la base
+ Lancer mongodb.exe
+ Lancer mongo.exe
+ Dans l'invite de commande ouverte par mongo.exe :
	+ taper  `use articlesDb`,
	+ puis insérer les données suivante :
```
db.article.insert({'titre': 'titreartcl1', date: new Date("2018-08-07"), 'auteur': 'Louis', 'resume': 'resumeartcl1'})
db.article.insert({'titre': 'titreartcl2', date: new Date("2018-08-07"), 'auteur': 'Marc', 'resume': 'resumeartcl2'})
db.article.insert({'titre': 'titreartcl3', date: new Date("2018-08-07"), 'auteur': 'Ugo', 'resume': 'resumeartcl3'})
db.article.insert({'titre': 'titreartcl4', date: new Date("2018-08-07"), 'auteur': 'Valentin', 'resume': 'resumeartcl4'})
db.article.insert({'titre': 'titreartcl5', date: new Date("2018-08-07"), 'auteur': 'Victor', 'resume': 'resumeartcl5'})
db.article.insert({'titre': 'titreartcl6', date: new Date("2018-08-07"), 'auteur': 'Eloise', 'resume': 'resumeartcl6'})
db.article.insert({'titre': 'titreartcl7', date: new Date("2018-08-07"), 'auteur': 'Quentin', 'resume': 'resumeartcl7'})
db.article.insert({'titre': 'titreartcl8', date: new Date("2018-08-07"), 'auteur': 'Lucas', 'resume': 'resumeartcl8'})
db.article.insert({'titre': 'titreartcl9', date: new Date("2018-08-07"), 'auteur': 'Elodie', 'resume': 'resumeartcl9'})
db.article.insert({'titre': 'titreartcl10', date: new Date("2018-08-07"), 'auteur': 'Louise', 'resume': 'resumeartcl10'})
db.article.insert({'titre': 'titreartcl11', date: new Date("2018-08-07"), 'auteur': 'Sami', 'resume': 'resumeartcl11'})
db.article.insert({'titre': 'titreartcl12', date: new Date("2018-08-07"), 'auteur': 'David', 'resume': 'resumeartcl12'})
```
+ Lancer une invite de commande à la racine du projet puis exécuter les lignes suivantes :
```
npm install
node server.js
```
+ Vous pouvez désormais accéder à l'adresse `http://localhost:8001` sur votre navigateur