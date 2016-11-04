# Meteor Boilerplate

The app and web interface are both powered by a single responsive codebase. I am using Meteor, an isomorphic framework
for both server and client interactions. Meteor is also using electron so we can build desktop apps.

I am also using React and Reflux on the front end to make a responsive, reactive and potentially real time
interface.

# Meteor
You can learn more about Meteor [Here](https://www.meteor.com/)

# React
You can learn more about React [Here](https://facebook.github.io/react/)

# Redux
You can learn more about Redux [Here](https://github.com/reactjs/redux)

# Startup

Navigate to the project's base directory via command line and type ***meteor***

This should install all meteor packages, npm packages, start meteor and mongo on your local host and serve your project.

You can then view your project by visiting **http://localhost:3000/** in the web browser

# Structure 

All client code is executed and stored in the **Client** folder

All server code is executed and stored in the **Server** folder

React containers are stored in **client/imports/containers**

Dumb React components are stored in **client/imports/components**

The root of the app is located in  **client/imports/main-layout.jsx**

Page routes are assigned in **client/main.jsx** and are served using [Flow Router](https://github.com/kadirahq/flow-router)