# Student Management System

## Overview
This is a simple **Student Management System** built with **Node.js**, **Express.js**, and **MongoDB**. It allows users to register, log in, and manage student records. The system includes authentication, role-based access control (RBAC), and password reset functionality.

## Features
- User authentication with JWT
- Role-based access control (RBAC)
- CRUD operations for student management
- Password reset functionality
- Secure API with validation
- Responsive UI using Bootstrap

## Technologies Used
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** EJS, Bootstrap
- **Authentication:** JWT, bcrypt
- **Security:** CSRF protection, input validation

## Installation
### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/student-management.git
   cd student-management
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in the root directory
   - Add the following environment variables:
     ```env
     PORT=3000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     ```
4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints
### Authentication
- `POST /register` - Register a new user
- `POST /login` - User login
- `POST /logout` - User logout
- `POST /reset-password` - Reset password

### Students
- `GET /students` - Get all students
- `POST /students` - Create a new student (Admin only)
- `PUT /students/:id` - Update student details (Admin only)
- `DELETE /students/:id` - Delete a student (Admin only)

## Security Measures
- Passwords are hashed using bcrypt
- JWT authentication for secure access
- CSRF protection for forms
- Input validation to prevent injection attacks

## Deployment
To deploy this project, you can use platforms like **Heroku**, **Vercel**, or **DigitalOcean**.

Example deployment with Heroku:
```sh
heroku login
heroku create student-management-app
heroku config:set MONGO_URI=your_mongodb_connection_string JWT_SECRET=your_secret_key
git push heroku main
```

## License
This project is licensed under the **MIT License**.

