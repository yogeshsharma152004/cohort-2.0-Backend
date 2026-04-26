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

# Day -99 - Login API & Password Security

## Login API Flow
- User sends email and password
- Server checks:
  - User exists or not
  - Password is correct or not

## If Valid
- Generate token
- Send token in cookies

## Token Best Practice
- Store only user ID
- Do not store sensitive data

## Cookies
- Access using req.cookies

## Data Breach Problem
- If database leaks, accounts can be hacked

## Solution: Hashing

- Convert password → hash
- Same input → same hash
- Cannot reverse hash to original password

## Crypto Module
- Used for hashing passwords
- Store hashed password in database

## Result
- Improved security for user data

---

# Day 100 & 101 - Motivation & Career Guidance

## Day 100 - Motivation
- Session by Ankur Bhaiya
- Focus on consistency and hard work

### Key Learnings
- Stay consistent daily
- Work hard for goals
- No shortcuts to success

## Day 101 - Career Guidance
- Session by Dhanesh Bhaiya
- Focus on job preparation

### Key Learnings
- Where and how to apply for jobs
- Use LinkedIn, referrals, and college networks
- Build strong resume and profile
- Importance of projects and skills
- Understand hiring mindset

## Result
- Clear direction for career
- Motivation to stay consistent

---

# Day -102 - Backend Project Setup

## Project Start
- Began a real-world backend mini project

## Folder Structure
- Learned better project organization
- Created controllers folder

## Backend Setup
- Structured project in a professional way

## Authentication
- Implemented authentication flow
- Completed login logic step by step

## Learning
- More practical and deep backend understanding

## Result
- Clear idea of real-world backend structure

---

# Day -103 - Post Creation & File Upload

## Database
- Use multiple collections (users, posts, etc.)
- Better data management

## Password Security
- Use bcryptjs for hashing
- More secure than crypto

### Methods
- Hash password
- Compare password using bcrypt.compare

## Data Referencing
- Pass user ID from user collection to post collection

## Multer (File Upload)
- Middleware to handle files

### Storage Types
1. Disk Storage
   - Store files in system (SSD/Hard disk)

2. Memory Storage
   - Store files temporarily in RAM

## Why Not Store Files on Server?
- Uses more bandwidth
- Higher cost

## Cloud Storage
- Use ImageKit for storing files
- Server stores file temporarily
- Upload to cloud, then remove from server

## Result
- Secure password handling
- Efficient file storage using cloud

---

# Day -104 - Post Creation & Token Verification

## Image Upload
- ImageKit returns:
  - fileId
  - size
  - URL
  - thumbnail

- Save image URL in database while creating post

## User Identification
- User sends token with request
- Token contains user data

## Token Verification
- Verify token using JWT
- Check if token is valid or fake

## Post Creation Flow
1. Check token in cookies
2. Verify token
3. Get user ID from token
4. Create post with user ID + image URL

## Unauthorized Access
- No token → user not registered or token expired
- Invalid token → reject request

## Error Handling
- Use try-catch

## ImageKit
- Create folders for better file organization

## Result
- Secure post creation with user authentication

---

# Day -105 - User Features & Authorization

## Get User Posts
- Identify user using token
- Get user ID
- Fetch all posts of that user

## Get Single Post
- Use postId from params
- Find post in database

## Authorization
- Verify token
- Check if post belongs to same user

## Unauthorized Case
- If user is not owner → return unauthorized

## Issue Faced
- postId and userId are ObjectId

## Solution
- Convert ObjectId to string using toString()
- Then compare values

## Result
- Only authorized users can access their posts

---



---




---