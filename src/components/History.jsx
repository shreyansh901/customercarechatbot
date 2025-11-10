import React, { useEffect, useState } from "react";
import "./History.css";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setHistory(saved);
  }, []);

  return (
    <div className="history-container">
      <h2>Past Conversations</h2>
      {history.length === 0 ? (
        <p className="empty-msg">No past conversations available.</p>
      ) : (
        <ul className="history-list">
          {history.map((item, index) => (
            <li key={index} className="history-item">
              <p>
                <strong>You:</strong> {item.query}
              </p>
              <p>
                <strong>Customer Support AI:</strong> {item.response}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
