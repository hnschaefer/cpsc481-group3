import React, { useState } from 'react';
import './CallForServer.css';

function CallForServer() {
  const [items, setItems] = useState([
    { id: 1, text: 'Help', completed: false },
    { id: 2, text: 'Napkins', completed: false },
    { id: 3, text: 'Water', completed: false },
  ]);

  const toggleItemCompletion = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleRequestClick = () => {
    // Implement the logic for handling the "Request" button click here
    // For example, you can send a request to the server
    // You can replace this with your actual logic
    alert('Request sent');
    setItems((prevItems) =>
    prevItems.map((item) => ({ ...item, completed: false }))
  );
  };

  return (
    <div className="checklist">
      <ul>
        {items.map((item) => (
          <li key={item.id} className={item.completed ? 'completed' : ''}>
            {item.text}
            <button onClick={() => toggleItemCompletion(item.id)}>
              {item.completed ? 'Uncheck' : 'Check'}
            </button>
          </li>
        ))}
      </ul>
      {/* Add the "Request" button below the checklist */}
      <button className="ok-button" onClick={handleRequestClick}>
        Ok
      </button>
    </div>
  );
}

export default CallForServer;