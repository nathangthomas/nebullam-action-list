# Welcome to Nebullam Action List

## Table of Contents
<!--ts-->
* [Description](#description)
* [Features](#features)
* [Set Up](#set-up)
* [Schema](#schema)
* [Tech Stack](#tech-stack)
* [Reflections](#reflecctions)
<!--te-->

## Description
For this challenge, I was asked to create a simple ToDo app. The backend had to be built with a combination of a [MySQL](https://www.mysql.com/) database and [Node-RED](https://nodered.org/). The front end was left up to me. I choose to use this opportunity to explore [React](https://reactjs.org/).
##### [Back to Table of Contents](#table-of-contents)


## Features
- A user is able to create, view, edit, or delete a task.
- A user can mark a task complete. (This functionality is not yet complete - Ran into some issues with how to get a React component to make a PUT request to toggle a boolean on a click event.)
##### [Back to Table of Contents](#table-of-contents)



## **Set Up**

### Clone repo
```
https://github.com/nathangthomas/nebullam-action-list
```
### Run Nebullam Action List Locally
- You’ll need to have [Node >= 8.10 and npm >= 5.6](https://nodejs.org/en/) on your machine.
- cd into the nebullam-action-list directory
- You can spin up your local server by running `npm start` or `yarn start` in your terminal
- Visit [http://localhost:3000/](http://localhost:3000/) in your browser to interact with the app.
##### [Back to Table of Contents](#table-of-contents)


### Live App
( **This functionality is not currently set up.** )
You can also interact with a live version of Nebullam Action List hosted on Heroku [HERE](https://nebullum-action-list.herokuapp.com/).


## Schema
The database schema is a simple one to many relationship between a Users table and Tasks table where a User can have many Tasks.
<img width="395" alt="Screen Shot 2020-06-03 at 9 38 32 AM" src="https://user-images.githubusercontent.com/47466067/83657421-12514600-a57e-11ea-9f63-b4172c65ac01.png">

##### [Back to Table of Contents](#table-of-contents)


## Tech Stack:
### This app was built with the following:
- [Node-RED](https://nodered.org/)
- [MySQL](https://www.mysql.com/)
- [React](https://reactjs.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Material-UI](https://material-ui.com/)
##### [Back to Table of Contents](#table-of-contents)

## Reflections

##### [Back to Table of Contents](#table-of-contents)






This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
