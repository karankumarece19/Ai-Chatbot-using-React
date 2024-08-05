import { useState } from "react";
import "./App.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Loading your answer... \n It might take up to 10 seconds");
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAtpAKost8jNAVMgq-z8JjE5FRWl8b7ycc",
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setAnswer(
        response.data.candidates[0].content.parts[0].text
      );
    } catch (error) {
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <div className="bg-gradient-to-r from-indigo-400 to-pink-400 min-h-screen p-6 flex flex-col justify-center items-center">
      <form
        onSubmit={generateAnswer}
        className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white text-center rounded-lg shadow-lg py-8 px-6 transition-transform duration-500 transform hover:scale-105"
      >
        <a href="" target="_blank" rel="noopener noreferrer">
          <h1 className="text-6xl font-extrabold text-blue-600 mb-6 animate-pulse">Ask AI</h1>
          <p className="text-sm font-bold text-gray-450">Using Google Gemini API</p>
        </a>
        <textarea
          required
          className="border border-gray-300 rounded w-full my-4 min-h-[100px] p-4 transition-shadow duration-300 focus:border-blue-400 focus:shadow-lg"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask any of your querry..."
        ></textarea>
        <button
          type="submit"
          className={`bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-colors duration-300 ${
            generatingAnswer ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={generatingAnswer}
        >
          {generatingAnswer ? 'Generating...' : 'Generate Answer'}
        </button>
      </form>
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white text-center rounded-lg shadow-lg my-6 p-6 transition-transform duration-500 transform hover:scale-105">
        <ReactMarkdown className="text-left">{answer}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
