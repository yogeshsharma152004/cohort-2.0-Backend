# Day 86 – Backend Journey Begins


## Key Concepts Learned

- Running JavaScript outside the browser using Node.js
- Understanding packages and how developers share reusable code
- Installing packages using npm
- Using packages inside our project
- Learned about a fun package called **cat-me**
- Understanding important files:
  - package.json
  - node_modules
  - package-lock.json
- What a **server** is and how it handles requests and responses
- Creating our **first server using Express**

This lecture was the first step toward understanding how the **backend of web applications works**.

---

# Day 87 – Guidance Session

## Overview
Today’s session was a **guidance and doubt-solving session** focused on improving mindset, consistency, and career direction.

---

## Key Concepts Learned

- Importance of **consistency** in learning
- How to **build skills effectively** instead of just completing lectures
- **Time management** and balancing learning with practice
- Handling distractions and staying focused
- Understanding how to prepare for the **current job market**

---



Day 88 Completed 🚀

# Day 88 – Programming the Server

## Overview
In the previous lecture, we learned how to create and start a server.  
Today, we learned how to **program the server** to send responses.

## Key Concepts Learned

- How a server handles requests and sends responses
- Understanding routes and paths
- What are ports and how they are used for communication
- Why commonly ports like 3000 and 8000 are used
- Background processes in the system and port allocation
- Using **nodemon** to automatically restart the server on changes
- Introduction to **deploying a server using Render**

---

# Day 89 – APIs & REST API Basics

## Overview
Today I learned about **APIs and REST APIs**, which are used for communication between frontend and backend.

---

## Key Concepts Learned

- API is a set of rules that allows applications to communicate
- REST API is used for client-server communication
- Communication must use HTTP/HTTPS

### HTTP Methods

- GET → Fetch data
- POST → Create data
- PUT → Update full data
- PATCH → Update partial data
- DELETE → Remove data

---

## Practical Work

- Created a server
- Made a notes array
- Sent data using POST (Postman)
- Received data using request body
- Stored data in array
- Fetched data using GET

---

# Day 90 – REST API Revision

## Overview
Today we revised REST API concepts and continued working on the Notes API project by adding delete and update functionality.

---

## Key Concepts Learned

- Revision of REST API and HTTP methods
- Deleting data using request params
- Understanding request.params for dynamic values
- Updating data partially using PATCH method

---

## Practical Work

- Deleted notes from array using index
- Used params to identify specific note
- Updated note data partially using PATCH

---

# Day 91 – Introduction to Database

## Overview
Today we learned about HTTP status codes and why databases are needed in backend development.

---

## Key Concepts Learned

### HTTP Status Codes

- 200 → Success (fetch/update)
- 201 → Resource created
- 204 → Resource deleted

---

## Problem Faced

- Data was stored in RAM
- On server restart, data was lost

---

## Solution

- Use a **database** for permanent storage

---

## MongoDB Setup

- Created project on MongoDB Atlas
- Created cluster
- Connected with MongoDB Compass

---

# Day -92 - Database Clusters & MongoDB Atlas

## What is a Cluster?
A cluster is a combination of:
- Storage (data capacity)
- Processor (performance)

It defines how fast data can be read/written and how much data can be stored.

## MongoDB Atlas
- Cloud platform to manage databases
- Used to create and manage clusters
- Provides global infrastructure

## Cluster Configuration
- Better processor → Faster performance
- Lower configuration → Slower performance

## Database Security

### 1. Network Layer
- Controls IP access
- Development: Allow access from anywhere
- Production: Restrict access

### 2. Database Users
Different roles:
- Admin → Full access
- Read & Write → Can read and write data
- Read Only → Can only read data

## MongoDB Compass
- GUI tool to view and manage databases
- Shows data inside clusters

## Notes
- One cluster can have multiple databases
- Backend can connect to MongoDB using Mongoose

---

# Day -93 - CRUD, Schema & Environment Variables

## CRUD Operations
- Create
- Read
- Update
- Delete

## Folder Structure
- Helps organize project
- Makes code clean and manageable

## Schema
- Defines structure of data
- Example types:
  - String
  - Number

## Mongoose
- Used to create schema and models

## Model
- Required to perform CRUD operations
- Connects schema with database

## Collection
- Stores data with same structure
- Each model is linked to a collection

## Database Operations
- Create data using POST method
- Store data using create method
- Fetch data using find method

## Environment Variables (.env)
- Store important/sensitive data
- Used inside project securely

## .gitignore
- Add .env file to prevent uploading to GitHub

---

# Day -94 - Update, Delete & Integration

## Database Operations

### Delete
- Use findByIdAndDelete
- Deletes specific data from database

### Update
- Use findByIdAndUpdate
- Updates specific data

## Backend–Frontend Integration
- Connect React frontend with backend APIs

## Axios
- Used to call backend APIs
- Example: axios.get()

## CORS Error
- Happens when frontend and backend are on different servers
- Browser blocks the request

## Solution
- Use CORS package in backend

---

# Day -95 - Full API Integration & Deployment

## API Integration
- Integrated POST, UPDATE, DELETE APIs in React
- Fetch and manage data from backend

## useEffect
- Prevents unnecessary re-renders
- Controls when API calls run

## React Build
- Run: npm run build
- Converts React app into:
  - HTML
  - CSS
  - JavaScript

## Deployment Setup
- Move build files to backend (public folder)

## Express Setup
- express.static → Serve static files
- Wildcard route (*) → Handle all routes
- res.sendFile → Send frontend file

## Result
- Frontend and backend run on same server

---

# Day -96 - Deployment (Frontend + Backend)

## Deployment Platforms
- Frontend: Vercel
- Backend: Render

## Problem
- Separate deployment requires managing different resources

## Solution
- Deploy frontend and backend together

## React Build
- Run: npm run build
- Creates dist folder:
  - HTML
  - CSS
  - JavaScript

## Setup
- Move dist files to backend (public folder)

## Express Middleware
- express.static() → Serve frontend files

## Deployment
- Deploy complete project on Render

## Issue Faced
- API calls still pointing to localhost

## Solution
- Replace localhost API with deployed backend URL
- Run npm run build again
- Replace old dist folder

## Result
- Full-stack app runs correctly on deployed server

---

# Day -97 - Authentication System

## 4 Pillars of Authentication

### 1. Authentication
- Identify which user is making request

### 2. Authorization
- Different users have different permissions

### 3. Validation
- Check data format (email, password, etc.)

### 4. Verification
- Check if data is correct and valid

## How Authentication Works

1. User registers (name, email, password)
2. Server stores data in database
3. Server creates a token

## Token
- Works like an ID card
- Sent with every request
- Helps server identify user

## JWT (JSON Web Token)
- Token is signed using secret key (JWT_SECRET)
- Secret key is stored only on server

## Security
- Server verifies token using secret
- Prevents fake users and requests

---

# Day -98 - Routing, JWT & Cookies

## Express Router
- Used to create modular routes
- Keeps code clean and organized

## Route Structure
- Create routes in separate folder
- Import and use in main file (app.js)
- Use prefix for routes

## Duplicate User Handling
- Check if email already exists
- Prevent multiple accounts with same email

## JSON Web Token (JWT)
- Install: npm i jsonwebtoken
- Generate token using user ID
- Sign token using JWT_SECRET

## Cookies
- Stored on client side (browser)
- Server can read and write cookies

## cookie-parser
- Install: npm i cookie-parser
- Helps access cookies in backend

## Notes
- Cookies can be seen in Postman
- Used to store token securely

---