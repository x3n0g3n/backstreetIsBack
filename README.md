
## project 2: Death Wish


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

The engine for this Death Wish app, Node.js RESTful API application with Handlebars.js, the database is MySQL, and Sequelize ORM is used for data modeling and in this case, creating a Death Wish list with the ability to review topics on ones list. The application provides express-session and cookie-based authentication, as well as GET and POST routes for obtaining and adding new data. Environment variables are used to protect sensitive data and API keys.

## Motivation
Death Wish has a strong, secure, and dependable RESTful API that can be utilized by a variety of web and mobile applications was the driving force behind the development of this service! The program adheres to best practices and industry standards and offers developers a flexible design that makes it simple to integrate it into their applications.

## Design Process

This app was designed by first creating the backend. The Model-View-Controller (MVC) design approach was used to create the application. The model represents the data structure and business logic, and the view represents the user interface. The controller controls communication between these two components. The application was meant to be responsive and entertaining to provide users the best experience possible. The "bucket list" type of application was chosen because it is a popular topic that many people can relate to. The application's design is simple and intuitive, allowing users to quickly and easily add and review items on their list.

## Technologies Used

```md
The following technologies were used in the development of this application:

-Node.js: An open-source, cross-platform JavaScript runtime environment that allows developers to build scalable and high-performance applications.
-Express.js: A flexible and lightweight Node.js web application framework that provides a robust set of features for web and mobile applications.
-Handlebars.js: A popular templating engine that allows developers to create dynamic HTML templates easily.
-MySQL: An open-source relational database management system that provides a scalable and reliable way to store and retrieve data.
-Sequelize ORM: A popular Node.js ORM that allows developers to interact with relational databases using JavaScript.
-express-session: A middleware that provides session support for Express.js applications.
-cookies: A middleware that provides cookie support for Express.js applications.
-dotenv: A zero-dependency module that loads environment variables from a .env file into process.env.
-jarallax: A JavaScript library that makes it simple to create parallax scrolling effects.
```

## Acceptance Criteria
```md
Use Node.js and Express.js to create a RESTful API.

Use Handlebars.js as the templating engine.

Use MySQL and the Sequelize ORM for the database.

Have both GET and POST routes for retrieving and adding new data.

Be deployed using Heroku (with data).

Use at least one new library, package, or technology that we haven’t discussed.

Have a polished UI.

Be responsive.

Be interactive (i.e., accept and respond to user input).

Have a folder structure that meets the MVC paradigm.

Include authentication (express-session and cookies).

Protect API keys and sensitive information with environment variables.

Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).

Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).
```
## Demonstration
The application includes both GET and POST routes for retrieving and adding new data. The application also includes authentication using express-session and cookies, and API keys and sensitive information are protected with environment variables. The application is also responsive and interactive to provide an optimal user experience.

## Future Development
Some possible future developments for this application include adding more features and functionality, improving the UI/UX, optimizing performance, and expanding support for more database management systems.

## Installation
```md
To install the application, follow these steps:

Clone the repository to your local machine
Install the required packages using npm install
Set up your environment variables in a .env file
Start the server using npm start
Deployment
The application can be easily deployed to Heroku using the following steps:

Create a new Heroku app
Connect your local repository to your Heroku app using Git
Set up your environment variables in your Heroku app
Deploy your app using Git push
Conclusion
This Node.js RESTful API application provides a flexible and scalable architecture that can be used for various web and mobile applications. The application adheres to best practices and industry standards, providing developers with a reliable and secure way to store and retrieve data.
```
## License

----------------------------------------------------------------------------------------------------------------
==> whats left to do for back end
L controllers
    L api
        L review routes
            + create user
            + logout user
            + delete user
        L reviews routes
            + create reviews
            + edit reviews

            + delete reviews

updated css background image. 
also dont forget to import Jarallax library for the background image.
npm install Jarallax