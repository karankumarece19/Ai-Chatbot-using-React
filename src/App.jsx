import { useState } from "react";
import "./App.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [conversation, setConversation] = useState([]);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    
    if (!question.trim()) return;
    
    const userMessage = { type: 'user', content: question, timestamp: new Date() };
    setConversation(prev => [...prev, userMessage]);
    
    setAnswer("🤔 Thinking...");
    
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAkjFfmsv6AerWBGioAZujExZ5bpXOXPf0",
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      const aiResponse = response.data.candidates[0].content.parts[0].text;
      setAnswer(aiResponse);
      
      const aiMessage = { type: 'ai', content: aiResponse, timestamp: new Date() };
      setConversation(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = "Sorry - Something went wrong. Please try again!";
      setAnswer(errorMessage);
      
      const aiMessage = { type: 'ai', content: errorMessage, timestamp: new Date() };
      setConversation(prev => [...prev, aiMessage]);
    }

    setGeneratingAnswer(false);
    setQuestion("");
  }

  const clearConversation = () => {
    setConversation([]);
    setAnswer("");
  };

  return (
    <div className="app-container">
      <div className="header">
        <div className="header-content">
          <h1 className="app-title">
            <span className="title-icon">🤖</span>
            AI Chat Assistant
          </h1>
        </div>
      </div>

      <div className="main-content">
        <div className="chat-container">
          {conversation.length === 0 ? (
            <div className="welcome-screen">
  
              <h2>Welcome to AI Chat!</h2>
              <p>Ask me anything and I'll help you find answers.</p>
              <div className="feature-list">
                <div className="feature-item">
                  <span className="feature-icon">✨</span>
                  <span>Smart responses with Gemini 2.0</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">⚡</span>
                  <span>Fast and accurate answers</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="conversation">
              {conversation.map((message, index) => (
                <div key={index} className={`message ${message.type}`}>
                  <div className="message-avatar">
                    {message.type === 'user' ? '👤' : '🤖'}
                  </div>
                  <div className="message-content">
                    <div className="message-text">
                      {message.type === 'user' ? (
                        <p>{message.content}</p>
                      ) : (
                        <ReactMarkdown>{message.content}</ReactMarkdown>
                      )}
                    </div>
                    <div className="message-time">
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="input-section">
          <form onSubmit={generateAnswer} className="input-form">
            <div className="input-container">
              <textarea
                required
                className="question-input"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask me anything..."
                rows="3"
                disabled={generatingAnswer}
              />
              <button
                type="submit"
                className={`send-button ${generatingAnswer ? 'loading' : ''}`}
                disabled={generatingAnswer || !question.trim()}
              >
                {generatingAnswer ? (
                  <>
                    <span className="loading-spinner"></span>
                    <span>Thinking...</span>
                  </>
                ) : (
                  <>
                    <span className="send-icon">📤</span>
                    <span>Send</span>
                  </>
                )}
              </button>
            </div>
          </form>
          
          {conversation.length > 0 && (
            <button onClick={clearConversation} className="clear-button">
              🗑️ Clear Chat
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
