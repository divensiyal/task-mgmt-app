# TaskManagerApp

A full-stack MERN (MongoDB, Express, React, Node) task management application that allows users to add and view tasks.

## Features

- Add new tasks with title and description
- View all saved tasks
- REST API backend with MongoDB
- React frontend using Redux for state management

## How It Works

The application consists of a Node.js backend with Express and MongoDB for data storage, and a React frontend using Redux for state management. Users can add new tasks through the frontend, which are stored in the MongoDB database. The backend provides a REST API to fetch and add tasks, while the frontend displays the tasks in a user-friendly interface.

## Folder Structure

- backend/
  - models/
    - Task.js
  - routes/
    - tasks.js
  - config/
    - db.js
  - server.js
- frontend/
  - public/
    - index.html
  - src/
    - components/
      - TaskCard.js
    - pages/
      - Home.js
      - NewTask.js
    - redux/
      - actions.js
      - reducer.js
    - App.js
    - index.js
    - store.js
- README.md
- package.json (in both backend/ and frontend/)
- .gitignore

## Setup Instructions

1. Clone the repo
2. Install backend dependencies:

```
cd backend
npm install
npm start
```

3. Install frontend dependencies:

```
cd ../frontend
npm install
npm start
```

Make sure MongoDB is running locally before starting the backend.

## Technologies Used

- Node.js + Express
- MongoDB + Mongoose
- React + Redux + React Router
- Bootstrap (for basic styling)

