import React, { useState } from "react";
import "./CallForServer.css";

function CallForServer() {
  const [items, setItems] = useState([
    { id: 1, text: "Help", completed: false },
    { id: 2, text: "Napkins", completed: false },
    { id: 3, text: "Water", completed: false },
  ]);

  const [showComponent, setShowComponent] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const toggleItemCompletion = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleRequestClick = () => {
    const selectedItems = items.filter((item) => item.completed);

    if (selectedItems.length === 0) {
      setShowMessage("Please select one or more of the options!");
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    } else {
      setShowMessage("The server is on their way!");
      setTimeout(() => {
        setShowMessage(false);
        setShowComponent(false);
      }, 3000);
    }
  };

  const handleCloseClick = () => {
    setShowComponent(false);
  };

  return (
    <div
      className="checklist"
      style={{ display: showComponent ? "block" : "none" }}
    >
      {showComponent && (
        <>
          {showMessage ? (
            <div className="message">{showMessage}</div>
          ) : (
            <>
              {items.length > 0 ? (
                <ul>
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className={item.completed ? "completed" : ""}
                    >
                      {item.text}
                      <button
                        onClick={() => toggleItemCompletion(item.id)}
                        className="addremove-button"
                      >
                        {item.completed ? "-" : "+"}
                      </button>
                    </li>
                  ))}
                  <button className="ok-button" onClick={handleRequestClick}>
                    Send
                  </button>
                  <button
                    style={{ marginTop: 5 }}
                    className="close-button"
                    onClick={handleCloseClick}
                  >
                    Close
                  </button>
                </ul>
              ) : (
                <div>No items available</div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default CallForServer;
