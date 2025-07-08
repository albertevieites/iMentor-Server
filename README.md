# 🎯 iMentor Server

> **Find a mentor in the Ironhack community**

A comprehensive backend API for connecting Ironhack students with experienced mentors in the community. Built with Node.js, Express, and MongoDB.

[![Deploy on Railway](https://railway.app/button.svg)](https://imentor-client.up.railway.app)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.18.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-7.x-green)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)

## 📋 Table of Contents

- [🎯 iMentor Server](#-imentor-server)
  - [📋 Table of Contents](#-table-of-contents)
  - [🌟 Features](#-features)
  - [🚀 Quick Start](#-quick-start)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Environment Variables](#environment-variables)
    - [Running the Application](#running-the-application)
  - [🛠️ Technologies Used](#️-technologies-used)
  - [📊 Project Structure](#-project-structure)
  - [🔗 API Documentation](#-api-documentation)
    - [Authentication Endpoints](#authentication-endpoints)
    - [Questions Endpoints](#questions-endpoints)
    - [Profile Endpoints](#profile-endpoints)
    - [Upload Endpoints](#upload-endpoints)
    - [Mentors Endpoints](#mentors-endpoints)
  - [📦 Data Models](#-data-models)
    - [User Schema](#user-schema)
    - [Question Schema](#question-schema)
    - [Comment Schema](#comment-schema)
  - [👨‍💻 Development](#-development)
    - [Development Workflow](#development-workflow)
    - [Code Quality](#code-quality)
  - [🌐 Deployment](#-deployment)
  - [🤝 Contributing](#-contributing)
  - [📝 License](#-license)

## 🌟 Features

- **🔐 Secure Authentication**: JWT-based authentication with bcrypt password hashing
- **👥 User Management**: Complete user profiles with mentor/mentee roles
- **❓ Q&A System**: Create, edit, and delete questions with community interaction
- **💬 Comment System**: Engage with the community through comments
- **🏷️ Tag-based Filtering**: Organize and filter questions by technology tags
- **📸 Image Upload**: Cloudinary integration for profile and question images
- **🔍 Mentor Discovery**: Find and connect with experienced Ironhack graduates
- **📱 RESTful API**: Clean, well-documented API endpoints
- **🛡️ Error Handling**: Comprehensive error handling and validation
- **🔒 Authorization**: Route protection and owner-only access controls

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18.x or higher)
- **MongoDB** (local or MongoDB Atlas)
- **Cloudinary Account** (for image uploads)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/imentor-server.git
   cd imentor-server
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=5005
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/imentor

# JWT Secret
TOKEN_SECRET=your-super-secret-jwt-key

# Cloudinary Configuration
CLOUDINARY_NAME=your-cloudinary-name
CLOUDINARY_KEY=your-cloudinary-key
CLOUDINARY_SECRET=your-cloudinary-secret

# CORS Origins (comma-separated)
ORIGIN=http://localhost:3000,http://localhost:5173
```

### Running the Application

**Development Mode:**

```bash
npm run dev
```

**Production Mode:**

```bash
npm start
```

**Code Formatting & Linting:**

```bash
npm run format  # Format code with Prettier
npm run lint    # Lint and fix code with ESLint
```

The server will start on `http://localhost:5005`

## 🛠️ Technologies Used

| Technology     | Version | Purpose                       |
| -------------- | ------- | ----------------------------- |
| **Node.js**    | 18.x    | Runtime environment           |
| **Express.js** | ^4.18.2 | Web framework                 |
| **MongoDB**    | ^7.6.3  | Database (via Mongoose)       |
| **JWT**        | ^9.0.2  | Authentication                |
| **bcryptjs**   | ^2.4.3  | Password hashing              |
| **Cloudinary** | ^1.41.0 | Image storage & processing    |
| **Multer**     | ^1.4.5  | File upload handling          |
| **CORS**       | ^2.8.5  | Cross-origin resource sharing |
| **Morgan**     | ^1.10.0 | HTTP request logging          |
| **ESLint**     | ^8.52.0 | Code linting                  |
| **Prettier**   | ^3.0.3  | Code formatting               |

## 📊 Project Structure

```
iMentor-Server/
├── 📁 config/           # Configuration files
│   ├── cloudinary.config.js
│   └── index.js
├── 📁 db/               # Database connection
│   └── index.js
├── 📁 error-handling/   # Error handling middleware
│   └── index.js
├── 📁 middlewares/      # Custom middleware
│   ├── jwt.middleware.js
│   └── ownerOnly.middleware.js
├── 📁 models/           # Mongoose schemas
│   ├── comment.model.js
│   ├── question.model.js
│   └── user.model.js
├── 📁 routes/           # API route definitions
│   ├── auth.routes.js
│   ├── index.routes.js
│   ├── mentors.routes.js
│   ├── profile.routes.js
│   ├── questions.routes.js
│   └── upload.routes.js
├── 📁 utils/            # Utility functions
│   └── tags.list.js
├── 📄 app.js            # Express app configuration
├── 📄 server.js         # Server entry point
└── 📄 package.json      # Dependencies & scripts
```

## 🔗 API Documentation

### Authentication Endpoints

| Method | Endpoint       | Description         | Request Body                             |
| ------ | -------------- | ------------------- | ---------------------------------------- |
| `POST` | `/auth/signup` | Register a new user | `{username, email, password, userType?}` |
| `POST` | `/auth/login`  | Authenticate user   | `{email, password}`                      |
| `POST` | `/auth/verify` | Verify JWT token    | Headers: `Authorization: Bearer <token>` |

### Questions Endpoints

| Method   | Endpoint                      | Description                               | Auth Required |
| -------- | ----------------------------- | ----------------------------------------- | ------------- |
| `GET`    | `/api/questions`              | Get all questions with optional filtering | ✅            |
| `POST`   | `/api/questions`              | Create a new question                     | ✅            |
| `GET`    | `/api/questions/:id`          | Get specific question by ID               | ✅            |
| `PATCH`  | `/api/questions/:id`          | Update question (owner only)              | ✅            |
| `DELETE` | `/api/questions/:id`          | Delete question (owner only)              | ✅            |
| `POST`   | `/api/questions/:id/comments` | Add comment to question                   | ✅            |

**Question Creation Body:**

```json
{
  "title": "How to implement authentication?",
  "description": "I'm struggling with JWT implementation...",
  "code": "const token = jwt.sign({...})",
  "tags": ["javascript", "authentication", "jwt"],
  "imageUrl": "https://cloudinary.com/..."
}
```

### Profile Endpoints

| Method  | Endpoint           | Description                      | Auth Required |
| ------- | ------------------ | -------------------------------- | ------------- |
| `GET`   | `/api/profile/:id` | Get user profile                 | ✅            |
| `PATCH` | `/api/profile/:id` | Update user profile (owner only) | ✅            |

### Upload Endpoints

| Method | Endpoint      | Description                | Auth Required |
| ------ | ------------- | -------------------------- | ------------- |
| `POST` | `/api/upload` | Upload image to Cloudinary | ✅            |

### Mentors Endpoints

| Method | Endpoint       | Description                      | Auth Required |
| ------ | -------------- | -------------------------------- | ------------- |
| `GET`  | `/api/mentors` | Get all mentors in the community | ✅            |

## 📦 Data Models

### User Schema

```javascript
{
  userType: {
    type: String,
    enum: ['student', 'mentor'],
    default: 'student'
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  aboutMe: String,
  profileImg: String,
  occupation: String,
  company: String,
  course: {
    type: String,
    enum: ['Web Development', 'UX/UI Design', 'Data Analytics']
  },
  graduationYear: Number,
  comments: [{ type: ObjectId, ref: 'Comment' }],
  questions: [{ type: ObjectId, ref: 'Question' }]
}
```

### Question Schema

```javascript
{
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  code: String,
  imageUrl: String,
  owner: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  comments: [{ type: ObjectId, ref: 'Comment' }],
  tags: [{
    type: String,
    enum: ['javascript', 'react', 'node', 'mongodb', 'css', 'html', 'python', 'express']
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
}
```

### Comment Schema

```javascript
{
  text: {
    type: String,
    required: true
  },
  author: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  question: {
    type: ObjectId,
    ref: 'Question',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}
```

## 👨‍💻 Development

### Development Workflow

1. **Create a new branch for your feature**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes and test thoroughly**

   ```bash
   npm run dev  # Start development server
   ```

3. **Format and lint your code**

   ```bash
   npm run format
   npm run lint
   ```

4. **Commit and push your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   ```

### Code Quality

This project uses:

- **ESLint** for code linting with Standard configuration
- **Prettier** for code formatting
- **Conventional Commits** for commit message formatting

## 🌐 Deployment

The application is deployed on **Railway**. For manual deployment:

1. **Build the application**

   ```bash
   npm install --production
   ```

2. **Set environment variables** in your hosting platform

3. **Start the production server**
   ```bash
   npm start
   ```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows our coding standards and includes appropriate tests.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ by the Ironhack community for the Ironhack community**
