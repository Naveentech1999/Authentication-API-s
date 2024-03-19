                                                            Express.js Authentication APIs with MongoDB

This repository contains a sample implementation of authentication APIs using Express.js and MongoDB, featuring user signup, login, user details retrieval, and protected routes using JWT tokens.

Prerequisites
Before you begin, ensure you have the following installed on your machine:
-> Node.js and npm
-> MongoDB

Setup
Clone this repository to your local machine:
git clone https://github.com/Naveentech1999/Authentication-API-s.git

Navigate to the project directory:
cd Authentication-API-s.git

Install dependencies:
npm install
express
mongoose
bcryptjs
jsonwebtoken
dotenv
nodemon : nodemon is a utility for Node.js that helps in automatically restarting the server whenever changes are detected in code

Start MongoDB server:
mongod


Create a .env file at the root of the project and specify the following environment variables:
PORT=3000
MONGODB_URI=mongodb://localhost:27017/your_database_name
JWT_SECRET=your_jwt_secret

Running the Application
To start the server, run:
npm start

Authentication APIs:

signup ---> POST Method
Endpoint: localhost:8080/auth-apis/signup

login ----> POST Method
Endpoint:  localhost:8080/auth-apis/login

userdetails ----> GET Method
Endpoint: localhost:8080/auth-apis/userdetails


Middleware : 
The application uses middleware for authentication. The Middleware.js file verifies JWT tokens and grants access to protected routes. for get all userdetails.



 
 

