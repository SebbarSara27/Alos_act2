# Alos_act2
Cette API a été créée pour faciliter le développement d'applications islamiques par les développeurs.
Les données utilisées dans le développement de cette API présentent plusieurs sources différentes, à la fois des API existantes et des résultats de grattage.
Cette API a été créée à l'aide d' Express Web Application Framework  que vous pouvez voir dans le fichier package.json.

### Structure du fichier : 

> un fichier package.json, qui va reprendre différentes informations du projet et qui contiendra les dépendances qu'on va y installer.

> un fichier surahs.json, qui va reprendre la base de données des surahs avec le numéro et le nom (arabe,anglais) et aussi le nombre des ayahs et sa type de revelation (mecca,madina).

> un fichier index.js qui va reprendre l’implémentation de l’ensemble des routes en utilisant le package express et  des middlwares validation des données dans l’ajout.

> un fichier test.js pour  tester notre API avec mocha .

### Définition des ressources de notre Node JS API: 

Pour notre api, Nous aurons besoin des fonctionnalités suivantes:
- Créer un surah
- Lister l'ensemble des surahs
- Récupérer les détails d'un surah en particulier
- mise à jour la liste des surahs
- Supprimer un surah


### Création des routes: 

 Dans notre api nous aurons besoin des routes suivantes:

```
GET /surahs
GET /surahs/:number
POST /surahs
PUT /surahs/:number
DELETE /surahs/:number

```
