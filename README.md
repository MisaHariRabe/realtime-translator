# 🌍 Realtime Translator

Un simple traducteur en temps réel basé sur le web, construit avec HTML et JavaScript pur. Il permet aux utilisateurs de traduire du texte entre plusieurs langues en utilisant le Web Translator API (`Translator.create` et `translator.translate`).

## ✨ Fonctionnalités

* **Sélection de la Langue :** Choisissez la langue source et la langue de destination dans des menus déroulants.
* **Mise en Cache Locale :** Les traductions sont mises en cache dans le `localStorage` du navigateur pour des récupérations instantanées et pour réduire la charge sur l'API de traduction.
* **Interface Utilisateur Simple :** Une interface propre et facile à utiliser pour une traduction rapide.



## 🛠️ Technologies Utilisées

* **HTML5**
* **CSS** (Basique, styles par défaut du navigateur)
* **JavaScript (ES6+)**

## 🚀 Installation et Utilisation

Ce projet est purement côté client et ne nécessite aucune installation de dépendances (hormis l'environnement d'exécution du navigateur).

### Prérequis

* Un navigateur web moderne (Chrome, Firefox, Edge, Safari).

### Étapes

1.  **Cloner le dépôt** (ou téléchargez les fichiers `index.html` et `script.js`).
    ```bash
    git clone [URL_DE_VOTRE_DÉPÔT]
    cd Realtime-Translator
    ```
2.  **Ouvrir l'application :** Ouvrez simplement le fichier `index.html` dans votre navigateur.

    ```bash
    # Exemple de commande pour ouvrir avec un éditeur de code
    open index.html
    ```

3.  **Traduire :**
    * Sélectionnez la **Langue Source** et la **Langue de Destination**.
    * Entrez le texte à traduire dans la zone de texte.
    * Cliquez sur le bouton **Traduire**.
    * Le résultat s'affichera en dessous.

> **Note Importante :** Le code utilise une Web API encore en cours de déeloppement `Translator.create` et `translator.translate`.

## ⚙️ Structure du Code

Le projet est organisé autour de deux fichiers principaux :

* `index.html` : Contient la structure HTML de l'interface utilisateur.
* `script.js` : Contient la logique JavaScript pour la gestion des événements, la mise en cache et l'appel de la fonction de traduction.

### Aperçu de `script.js`

Le script gère :

1.  **`languages` :** Un tableau des langues prises en charge.
2.  **`populateLanguageSelects()` :** Remplissage des menus déroulants de langue au chargement de la page.
3.  **Mise en Cache :**
    * `generateCacheKey()` : Crée une clé unique basée sur le texte, la source et la destination.
    * `getCachedTranslation()` : Récupère une traduction mise en cache via `localStorage`.
    * `setCachedTranslation()` : Stocke une nouvelle traduction dans `localStorage`.
4.  **`handleTranslate()` :** La fonction **asynchrone clé** qui simule l'appel à l'API de traduction externe.
5.  **Gestionnaire d'événements (Bouton) :**
    * Vérifie si le texte source est vide.
    * Vérifie d'abord le cache local.
    * Si non mis en cache, appelle `handleTranslate()`.
    * Met à jour l'affichage de la traduction.

## 🤝 Contribution

Les contributions sont les bienvenues ! Si vous souhaitez améliorer ce projet, veuillez suivre ces étapes :

1.  Forkez ce dépôt.
2.  Créez une nouvelle branche de fonctionnalité (`git checkout -b feature/AméliorationAwesome`).
3.  Committez vos changements (`git commit -m 'feat: Ajouter une fonctionnalité awesome'`).
4.  Poussez vers la branche (`git push origin feature/AméliorationAwesome`).
5.  Ouvrez une Pull Request.

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
