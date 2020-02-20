# Udacity-React-Booktracker

Booktracker is an app used to track one's currently reading, want to read and read books. This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

[Click Here](https://rsirs.github.io/udacity-react-booktracker/) to have a look at currently running app.

## Table of Contents

- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)
  - [GitHub Pages](#github-pages)

## Installation

To work on the application
  * Clone the repository using `git clone https://github.com/rsirs/udacity-react-booktracker.git`
  * Install all the dependencies using `npm install`
  * To run the application at localhost:3000 use `npm start`
  
## Folder Structure

The project structure looks as shown below
```bash
├── README.md - This file.
├── package.json # Contains dependencies and project related configuration
├── public # Statics files are served from this folder
│   ├── favicon.ico 
│   ├–– index.html # Index file that is served at the request
|   ├–– manifest.json # Stores the meta about the project
└── src
    ├── App.css # Styles for your app
    ├── App.js # Serves the main page of the app
    ├── AppRoutes.js # Contians all the routes for the app
    ├── BookShelf.js # Represent a book shelf
    ├── BookItem.js # Represnet a book
    ├── SearchBooks.js # Seach page of the application 
    ├── index.css # Global styles.
    ├── index.js # Bootstrap of the application
    ├── utils # utilites scripts uses in the applicaiton.
    |   ├── async-utils.js # Contains debounce and throttle functions
    |   └── string-utils.js # Contains useful string utility functions
    ├── APIs # Contains servers api call file
    |   └── BooksAPI.js # A JavaScript API for the provided Udacity backend
    └── images # Helpful images for your app.
        ├── loading.svg
        ├── arrow-back.svg
        ├── search.svg
        └── rating.svg     
```

## Deployment

To deploy the application create a build of the application using `npm run build` command and then use this build to deploy on the servers. But before creating a build of the application update package.json with ***homepage*** propery and then update the ***BrowserRouter*** basepath property with `<basepath>`. Below is an example of deployement to github pages.

### Github Pages

To deploy to github pages 
  1. Update package.json with "homepage":"https://`<github-username>`.github.io/`<github-reponame>`/"
  2. Update the *basepath* of BrowserRouter component with `<github-reponame>`
  3. Install gh-pages using `npm install -g gh-pages`
  4. Build the app using `npm run build`
  5. Publish the application to github pages using `gh-pages -d build`

