Book Management Application
Overview
This application manages a collection of books using a Spring Boot backend with GraphQL for the API and a React frontend to interact with it. It allows users to perform CRUD operations (Create, Read, Update, Delete) on books stored in a database.

Backend (Spring Boot + GraphQL)
Technologies Used
Java 17
Spring Boot 3.3.0
Spring Data JPA
GraphQL
H2 Database (runtime)

Build and Run the Backend


./gradlew build
./gradlew bootRun

Backend Features
GraphQL API
/graphql: Endpoint for GraphQL queries and mutations.
Provides CRUD operations for managing books (saveBook, deleteBook, getAllBooks, getBookById).

Testing
Unit tests are provided for services and repositories.
To run tests on cmd:
gradlew test

Frontend (React)
Technologies Used
React.js
Apollo Client for GraphQL integration
Bootstrap for styling
Setup and Run
Navigate to Frontend Directory


Install Dependencies


npm install
Run the Frontend


npm start
This will start the React development server at http://localhost:3001

Frontend Features
Book Management Interface
Displays a list of books fetched from the GraphQL backend.
Allows adding new books.
Supports updating and deleting existing books.
Known Issues:
encountered a "Failed to fetch" error.

Conclusion
This application demonstrates how to build a full-stack web application using Spring Boot with GraphQL on the backend and React on the frontend. It integrates CRUD operations via GraphQL queries and mutations, providing a seamless user experience for managing a collection of books.