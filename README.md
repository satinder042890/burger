# Eat-Da-Burger

This app uses Handlebars, MySQL, Node, Express, and a homemade ORM to create a burger logger. I followed the MVC design pattern and Node to Query the route data for the app. Handlebars was used to generate all of my HTML.

## Application Heroku Link

The link below will give you direct access to Eat-Da-Burger web application using your web browser via the Heroku web service. (NOTE: There will be a momentary delay when first accessing the Heroku servers.)

## Local Environment Setup
To use Eat-Da-Burger web application application from your local environment, you must accomplish the following steps below:

##### Step 1 - Clone my repo using the command line below.
`
git clone https://github.com/satinder042890/burger.git
`

##### Step 2 - Change directory to the cloned repo folder.
`
cd burger
`
##### Step 3 - Install all required NPM packages.
`
npm install
`
##### Step 4 - Start the application server using the command line below
`
node server.js
`
## Technology used

* node.js - https://nodejs.org/en/
* heroku-cli NPM Package - https://www.npmjs.com/package/heroku-cli
* express NPM Package - https://www.npmjs.com/package/express
* path NPM Package - https://www.npmjs.com/package/path

## Built With
* VS Code - https://code.visualstudio.com/
* Git Tools - https://git-scm.com/download
* Live Markdown Editor - https://jbt.github.io/markdown-editor/

## Instructions
* Type a burger name into the app and click on submit button.
* Burger will be added to the "Burger List" section of the page.
* In the "burger List" click on devour button of a burger that you would like to Devour from the "Burger List".
* Burger will be moved to the "Devoured Burger List" section of the page.
* In the "Devoured Burger List" click on "X" button of a burger that you would like to Remove from the " Devoured Burger List".
* Burger will be removed from the "Devoured Burger List" section of the page.

![alt text](https://github.com/satinder042890/burger/blob/master/public/assets/images/startscreen.gif)
