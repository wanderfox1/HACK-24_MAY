import React from 'react';
import './Pushsection.css'; // You'll need to create this CSS file for styling

function Pushsection({ role }) {
  // Define different messages for each role
  const messages = {
    admin: "Welcome, Admin!",
    user: "Welcome, User!",
    guest: "Welcome, Guest!"
  };

  // Determine the message based on the user's role
  const message = messages[role] || "Welcome!";

  return (
    <div className="message-container">
      <div className="message-image">
        
      </div>
      <div className="message">
        {message}
      </div>
    </div>
  );
}

export default Pushsection;