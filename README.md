# Welcome to Nebullam Action List

## Table of Contents
<!--ts-->
* [Description](#description)
* [Features](#features)
* [Set Up](#set-up)
* [Schema](#schema)
* [Tech Stack](#tech-stack)
* [Reflections](#reflections)
<!--te-->

## Description
For this challenge, I was asked to create a simple ToDo app. The backend had to be built with a combination of a [MySQL](https://www.mysql.com/) database and [Node-RED](https://nodered.org/). The front end was left up to me. I choose to use this opportunity to explore [React](https://reactjs.org/).
##### [Back to Table of Contents](#table-of-contents)


## Features
- A user is able to create, view, edit, and delete a task.
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


## Schema
The database schema is a simple one to many relationship between a Users table and Tasks table.

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
### Roses:
  Going into this project I was unfamiliar with [Node-RED](https://nodered.org/) and had little experience with [React](https://reactjs.org/). I am excited to have had the introduction to [Node-RED](https://nodered.org/) and now have a good understanding of both how to use it and when it is the best tool for the job. Additionally, I am excited about the amount of new knowledge I have gained in the [React](https://reactjs.org/) framework.

### Thorns:
  I have had many irons in the fire and feel this has caught up to me in the form of having less time to give due diligence to everything. I am going to take this as a sign to dial back my commitments in order to give the greatest focus to my highest priorities. My enthusiasm to learn new technologies is a double edged sword. I had the option to build the front end in any framework and I eagerly jumped at the opportunity to build it in React - a framework I have little experience with. Ultimately I am glad I did, however, this resulted in me moving slower as I learned the nuances of a new framework and ultimately left the project with one piece of core functionality not working. Given more time I would go back and implement authentication/authorization functionality as I am not particularly excited about my work-around for having a multiple users. 

### Buds:
  I keep coming up with new use cases for using Node-RED](https://nodered.org/) in future IOT projects and am excited to see those come to fruition. I am also currently using the skills I gained in [React](https://reactjs.org/) to implement new features on my current contract gig. I am looking forward to looking back in a short time and seeing how far I have come.


##### [Back to Table of Contents](#table-of-contents)






This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
