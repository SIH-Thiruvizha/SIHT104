// ShareDocument.js

import React, { useState } from 'react';

const ShareDocument = ({ onClose, onShare }) => {
  const [selectedRecipient, setSelectedRecipient] = useState('');
  const [selectedMedium, setSelectedMedium] = useState('');

  const handleShareClick = () => {
    // Perform share logic here and pass the selected recipient and medium to the parent component
    onShare(selectedRecipient, selectedMedium);
    onClose();
  };

  return (
    <div className="share-document">
      <h2>Share Document</h2>
      <label>Select Recipient:</label>
      <input
        type="text"
        value={selectedRecipient}
        onChange={(e) => setSelectedRecipient(e.target.value)}
      />
      <label>Select Medium:</label>
      <select
        value={selectedMedium}
        onChange={(e) => setSelectedMedium(e.target.value)}
      >
        <option value="">Select a medium</option>
        <option value="Email">Email</option>
        <option value="Message">Message</option>
        {/* Add more options as needed */}
      </select>
      <button onClick={handleShareClick}>Share</button>
    </div>
  );
};

export default ShareDocument;
