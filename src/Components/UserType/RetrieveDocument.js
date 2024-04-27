import React, { useState } from 'react';
import './RetrieveDocument.css';
const RetrieveDocument = ({ onClose, onDocumentSelect }) => {
  const [selectedDocument, setSelectedDocument] = useState('');

  const handleDocumentSelect = () => {
    onDocumentSelect(selectedDocument);
    onClose();
  };

  return (
    <div className="retrieve-document">
      <h2>Select Document to Retrieve</h2>
      <select
        value={selectedDocument}
        onChange={(e) => setSelectedDocument(e.target.value)}
      >
        <option value="">Select a document</option>
        <option value="document1">Document 1</option>
        <option value="document2">Document 2</option>
        <option value="document3">Document 3</option>
        {/* Add more options as needed */}
      </select>
      <button onClick={handleDocumentSelect}>Retrieve</button>
    </div>
  );
};

export default RetrieveDocument;
