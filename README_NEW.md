# 🚀 Collab-Editor

A real-time collaborative text editor with AI-powered writing assistance. Built with React, Node.js, and WebSockets for seamless real-time collaboration.

## ✨ Features

- **Real-time Collaboration**: Multiple users can edit documents simultaneously with live cursor tracking
- **AI-Powered Writing Assistant**: Get intelligent suggestions for text completion and enhancement
- **Rich Text Editing**: Full-featured text editor with formatting options
- **User Authentication**: Secure signup and login system with JWT
- **Document Management**: Create, edit, and organize your documents
- **Responsive Design**: Works on desktop and tablet devices

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Chakra UI
- React Quill
- Socket.IO Client
- Zustand (State Management)

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- Socket.IO
- JWT Authentication
- Rate Limiting

### AI Integration
- Gemini AI API
- Smart text completion
- Grammar checking
- Text enhancement

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or pnpm
- MongoDB Atlas or local MongoDB instance
- Gemini AI API Key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shikhar2001Bhadani/Collab-Editor.git
   cd Collab-Editor
   ```

2. **Set up the backend**
   ```bash
   cd server
   cp .env.example .env
   # Update .env with your configuration
   pnpm install
   ```

3. **Set up the frontend**
   ```bash
   cd ../client
   cp .env.example .env
   # Update VITE_API_URL if needed
   pnpm install
   ```

4. **Start the development servers**

   In the server directory:
   ```bash
   pnpm run dev
   ```

   In a new terminal, from the client directory:
   ```bash
   pnpm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🔧 Environment Variables

### Server (`.env`)
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
GEMINI_API_KEY=your_gemini_api_key
NODE_ENV=development
```

### Client (`.env`)
```
VITE_API_URL=http://localhost:5000
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📬 Contact

Shikhar Bhadani - [@your_twitter](https://twitter.com/your_twitter)

Project Link: [https://github.com/Shikhar2001Bhadani/Collab-Editor](https://github.com/Shikhar2001Bhadani/Collab-Editor)
