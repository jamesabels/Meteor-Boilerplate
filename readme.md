# OFRN Sport's Website/App

The app and web interface are both powered by a single responsive codebase. I am using Meteor, an isomorphic framework
for both server and client interactions. Meteor is also using cordova so we can build mobile apps from the mobile version
of the code. I am also using React and Reflux on the front end to make a responsive, reactive and potentially real time
interface.

# Meteor
You can learn more about Meteor [Here](https://www.meteor.com/)

# Cordova
You can learn more about Cordova [Here](https://cordova.apache.org/)

# React
You can learn more about React [Here](https://facebook.github.io/react/)

# Startup

Navigate to the project's base directory via command line and type ***meteor run***

This should install all meteor packages, npm packages, start meteor and mongo on your local host and serve your project.

You can then view your project by visiting **http://localhost:3000/** in the web browser

# Structure 

All client code is executed and stored in the **Client** folder

All server code is executed and stored in the **Server** folder 

All isomorphic code is executed and stored in the **Imports** folder 

React components are stored in **client/components**

Page components are stored in **client/pages**

Page routes are assigned in **client/main.jsx** and are served using [Flow Router](https://github.com/kadirahq/flow-router)