# 🤖 AI Chat Assistant

A modern, responsive AI chatbot built with React and powered by Google Gemini 2.0 API. Features a beautiful chat interface with conversation history, real-time responses, and markdown support.

![AI Chat Assistant](https://img.shields.io/badge/React-18.0+-blue.svg)
![Gemini API](https://img.shields.io/badge/Gemini-2.0-FF6B35.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## ✨ Features

- **🤖 Powered by Gemini 2.0** - Latest AI model for accurate and intelligent responses
- **💬 Real-time Chat Interface** - Modern chat UI with message history
- **📱 Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- **🎨 Beautiful Design** - Glassmorphism effects with smooth animations
- **📝 Markdown Support** - Rich text formatting in AI responses
- **⏰ Message Timestamps** - Track when messages were sent
- **🗑️ Clear Chat** - Easy conversation reset functionality
- **⚡ Fast & Efficient** - Optimized performance with React hooks
- **🎯 User-Friendly** - Intuitive interface with loading states

## 🚀 Live Demo

[Try the AI Chat Assistant](https://your-demo-link.com)

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Google Gemini 2.0 API** - Advanced AI language model
- **Axios** - HTTP client for API requests
- **React Markdown** - Markdown rendering
- **CSS3** - Modern styling with animations
- **Glassmorphism** - Contemporary UI design

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Ai-Chatbot-using-React.git
   cd Ai-Chatbot-using-React
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your API key**
   - Get your Google Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Update the API key in `src/App.jsx`:
   ```javascript
   url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY_HERE"
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Configuration

### API Key Setup
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Replace `YOUR_API_KEY_HERE` in `src/App.jsx` with your actual API key

### Environment Variables (Optional)
For better security, you can use environment variables:

1. Create a `.env` file in the root directory:
   ```
   REACT_APP_GEMINI_API_KEY=your_api_key_here
   ```

2. Update the API call in `src/App.jsx`:
   ```javascript
   url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`
   ```

## 📱 Usage

1. **Start a conversation** - Type your question in the input field
2. **Send messages** - Click the "Send" button or press Enter
3. **View responses** - AI responses appear with markdown formatting
4. **Clear chat** - Use the "Clear Chat" button to start fresh
5. **Mobile friendly** - Works seamlessly on all devices

## 🎨 UI Features

- **Welcome Screen** - Beautiful introduction with feature highlights
- **Chat Interface** - Modern message bubbles with avatars
- **Loading States** - Smooth animations during API calls
- **Responsive Design** - Adapts to any screen size
- **Dark/Light Theme** - Automatic theme detection
- **Smooth Animations** - Bounce, pulse, and slide effects

## 📁 Project Structure

```
src/
├── App.jsx          # Main application component
├── App.css          # Styling and animations
└── index.js         # React entry point
```

## 🔒 Security

- API keys should be kept secure and not committed to version control
- Consider using environment variables for production
- Implement rate limiting for API calls if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Google Gemini API](https://ai.google.dev/) for providing the AI capabilities
- [React](https://reactjs.org/) for the amazing framework
- [React Markdown](https://github.com/remarkjs/react-markdown) for markdown rendering

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the maintainers.

---

⭐ **Star this repository if you found it helpful!**
