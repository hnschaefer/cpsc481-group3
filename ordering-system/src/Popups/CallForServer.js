import React, { useState } from 'react';
import './CallForServer.css';

function CallForServer() {
  const [items, setItems] = useState([
    { id: 1, text: 'Help', completed: false },
    { id: 2, text: 'Napkins', completed: false },
    { id: 3, text: 'Water', completed: false },
  ]);

  const [showMessage, setShowMessage] = useState(false);

  const toggleItemCompletion = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleRequestClick = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, completed: false }))
    );

    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 4000);
  };

  return (
    <div className="checklist">
      {showMessage ? (
        <div>The server is on their way</div>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id} className={item.completed ? 'completed' : ''}>
              {item.text}
              <button onClick={() => toggleItemCompletion(item.id)} className="addremove-button">
                {item.completed ? '-' : '+'}
              </button>
            </li>
          ))}
          <button className="ok-button" onClick={handleRequestClick}>
            Ok
          </button>
        </ul>
      )}
    </div>
  );
}

export default CallForServer;