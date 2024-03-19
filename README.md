<h1>Express.js Authentication APIs with MongoDB</h1

This repository contains a sample implementation of authentication APIs using Express.js and MongoDB, featuring user signup, login, user details retrieval, and protected routes using JWT tokens.

<h2>Prerequisites</h2>
Before you begin, ensure you have the following installed on your machine:
-> Node.js and npm
-> MongoDB

<h2>Setup</h2>
Clone this repository to your local machine:
git clone https://github.com/Naveentech1999/Authentication-API-s.git

Navigate to the project directory:
cd Authentication-API-s.git

<h2>Install dependencies:</h2>
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

<h2>Running the Application</h2>
To start the server, run:
npm start

<h2>Authentication APIs:</h2>

signup ---> POST Method
Endpoint: localhost:8080/auth-apis/signup

login ----> POST Method
Endpoint:  localhost:8080/auth-apis/login

userdetails ----> GET Method
Endpoint: localhost:8080/auth-apis/userdetails


<h2>Middleware : </h2>
The application uses middleware for authentication. The Middleware.js file verifies JWT tokens and grants access to protected routes. for get all userdetails.



 
 

