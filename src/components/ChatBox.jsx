import React, { useState, useEffect } from "react";
import data from "../data.json";
import "./ChatBox.css";

const ChatBox = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setHistory(savedHistory);
  }, []);

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(history));
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const match = data.find(
      (item) => item.question.toLowerCase() === query.toLowerCase()
    );

    const reply = match
      ? match.answer
      : "Sorry, Did not understand your query!";

    const newConversation = { query, response: reply };
    setHistory([...history, newConversation]);
    setResponse(reply);
  };

  const handleNewQuery = () => {
    setQuery("");
    setResponse("");
  };

  return (
    <div className="chat-container">
      <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          placeholder="Please tell me about your query!"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="chat-input"
        />
        <button type="submit" className="chat-btn">
          Submit
        </button>
        <button type="button" className="new-btn" onClick={handleNewQuery}>
          New Query
        </button>
      </form>

      {response && (
        <div className="response-box">
          <p>
            <strong>Customer Support AI:</strong> {response}
          </p>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
