# LinkedIn Clone 🚀

A full-stack **LinkedIn-inspired social networking platform** built with the **MERN Stack**, featuring JWT authentication, posts, image uploads, real-time likes and comments, connection requests, notifications, profile management, and search.

## ✨ Features

* 🔐 **User Authentication**

  * JWT authentication
  * Password hashing with `bcrypt.js`
  * Protected routes

* 📝 **Post Upload & Image Upload**

  * Create posts
  * Upload images using `Multer`
  * Store images using `Cloudinary`

* ❤️ **Real-Time Likes & Comments**

  * Like / unlike posts
  * Add comments
  * Real-time updates using `Socket.io`

* 🤝 **Connection Requests & Network**

  * Send connection requests
  * Accept/reject requests
  * Manage professional connections
  * Network page

* 👤 **Profile Management**

  * View profiles
  * Edit profile
  * Update profile information

* 🔔 **Live Notifications**

  * Connection request notifications
  * Like notifications
  * Comment notifications
  * Real-time notifications using `Socket.io`

* 🔎 **Powerful Search**

  * Search users
  * Find people across the network

* 🧠 **State Management**

  * React Context API
  * Global application state

## 🛠️ Tech Stack

### Frontend

* React.js
* Context API
* JavaScript
* HTML
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt.js

### Other Technologies

* Socket.io
* Multer
* Cloudinary

## 📂 Project Structure

```text
linkedin-clone/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env.example
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   └── App.jsx
│   └── package.json
│
├── .gitignore
└── README.md
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd linkedin-clone
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Environment Variables

Create a `.env` file inside the `backend` directory.

```env
PORT=8000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

FRONTEND_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

> **Note:** Never commit your `.env` file to GitHub. Use `.env.example` to show the required variables.

### 4. Start the Backend

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:8000
```

### 5. Install Frontend Dependencies

Open a new terminal:

```bash
cd frontend
npm install
```

### 6. Start the Frontend

```bash
npm run dev
```

## 🔐 Authentication Flow

```text
User Registration
       ↓
Password Hashing
       ↓
bcrypt.js
       ↓
MongoDB
       ↓
User Login
       ↓
JWT Token
       ↓
Protected API Requests
```

## ☁️ Image Upload Flow

```text
User
 ↓
Image Upload
 ↓
Multer
 ↓
Express Backend
 ↓
Cloudinary
 ↓
Image URL
 ↓
MongoDB
```

## ⚡ Real-Time Features

Socket.io is used for real-time communication.

* ❤️ Real-time likes
* 💬 Real-time comments
* 🔔 Live notifications
* 🤝 Connection request updates

## 📚 Learning Outcomes

This project helped me understand:

* MERN stack architecture
* REST API development
* JWT authentication
* Password hashing
* MongoDB & Mongoose
* Express middleware
* File uploads
* Cloudinary integration
* Socket.io and WebSockets
* Real-time notifications
* Social networking logic
* React Context API
* Frontend and backend integration
* Protected API routes
* Full-stack application architecture

## 🔮 Future Improvements

* 💬 One-to-one real-time chat
* 📹 Video uploads
* 💼 Job posting system
* 🏢 Company profiles
* 📄 Resume uploads
* 🔐 Google OAuth
* 📧 Email notifications
* 🤖 AI-powered job recommendations
* 🌙 Dark mode
* 🚀 Production deployment

## 🎯 Project Goal

The goal of this project is to build a real-world full-stack social networking application while learning how modern applications handle:

**Authentication → Posts → Networking → Real-Time Communication → Notifications → Search**

## 👨‍💻 Author

**Vansh Khubchandani**

MERN Stack Developer | Full-Stack Development

## ⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub!
