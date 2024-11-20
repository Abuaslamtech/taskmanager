# 📝 Task Manager API

A simple RESTful API for managing tasks built with Node.js, Express, and MongoDB. ⚡

## ✨ Features

- ➕ Create new tasks
- 📋 Retrieve all tasks
- 📝 Update existing tasks
- 🗑️ Delete tasks
- 📊 Status tracking (Pending, In Progress, Completed)

## 🔧 Prerequisites

- 📦 Node.js installed
- 🍃 MongoDB installed and running locally
- 📦 npm or yarn package manager

## 🚀 Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd task-manager
```

2. Install dependencies:
```bash
npm install
```

3. Start MongoDB locally:
```bash
mongod
```

4. Start the server:
```bash
npm start
```

The server will start running on `http://localhost:3000` 🎉

## 🛣️ API Endpoints

### 📥 Get all tasks
```
GET /api/tasks
```

### ➕ Create a new task
```
POST /api/add
```
Request body:
```json
{
  "title": "Task Title",
  "description": "Task Description",
  "status": "Pending"
}
```
📝 Note: Status must be one of: "Pending", "In Progress", "Completed"

### 📝 Update a task
```
PUT /api/tasks/:id
```
Request body:
```json
{
  "title": "Updated Title",
  "description": "Updated Description",
  "status": "In Progress"
}
```

### 🗑️ Delete a task
```
DELETE /api/tasks/:id
```

## 📁 Project Structure

```
task-manager/
├── models/
│   └── taskModel.js
├── controllers/
│   └── taskController.js
├── routes/
│   └── taskRoutes.js
├── server.js
└── package.json
```

## 📦 Dependencies

- 🚂 express: Web framework for Node.js
- 🍃 mongoose: MongoDB object modeling tool
- 📨 body-parser: Request body parsing middleware

## 💾 Database Schema

```javascript
{
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    maxlength: 200,
    trim: true
  },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    required: true
  },
  timestamps: true
}
```

## ⚠️ Error Handling

The API includes basic error handling for:
- 🔌 Database connection errors
- ❌ Invalid request body
- 🔍 Non-existent tasks
- 🚫 Server errors

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request
