import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import './Dashboard.css';
import RetrieveDocument from './RetrieveDocument'; // Import the RetrieveDocument component

const Dashboard = ({ name, userType }) => {
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [showRetrieveDialog, setShowRetrieveDialog] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState('');
  const [showTrackDialog, setShowTrackDialog] = useState(false);
  const [fileStatus, setFileStatus] = useState('');
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [recipient, setRecipient] = useState('');
  const [shareContent, setShareContent] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [documents, setDocuments] = useState([]); // State to hold uploaded documents
  const [clientDocuments, setClientDocuments] = useState([]); // State to hold client's uploaded documents
  const [lawyerDocuments, setLawyerDocuments] = useState([]); // State to hold lawyer's uploaded documents

  useEffect(() => {
    // Retrieve documents from local storage when the component mounts
    const storedDocuments = JSON.parse(localStorage.getItem('uploadedDocuments')) || [];
    if (storedDocuments) {
      setDocuments(storedDocuments);
    }
  }, []);

  useEffect(() => {
    // Filter client's uploaded documents
    const clientDocs = documents.filter(doc => doc.uploadedBy === 'client');
    setClientDocuments(clientDocs);
    
    // Filter lawyer's uploaded documents
    const lawyerDocs = documents.filter(doc => doc.uploadedBy === 'lawyer');
    setLawyerDocuments(lawyerDocs);
  }, [documents]);

  const handleFileSelect = (e) => {
    const fileInput = e.target;
    const selectedFile = fileInput.files[0];

    if (selectedFile) {
      const fileMetadata = {
        name: selectedFile.name,
        size: selectedFile.size,
        type: selectedFile.type,
        lastModified: selectedFile.lastModified,
        content: URL.createObjectURL(selectedFile), // Store the content of the PDF
        uploadedBy: userType, // Add the userType who uploaded the document
      };

      // Store file metadata in state
      setUploadedFile(fileMetadata);
      setUploadSuccess(true);

      // Add the uploaded document to the documents array
      const updatedDocuments = [...documents, fileMetadata];
      setDocuments(updatedDocuments);

      // Store documents in local storage
      localStorage.setItem('uploadedDocuments', JSON.stringify(updatedDocuments));

      // Clear the file input value to allow selecting the same file again
      fileInput.value = null;
    }
  };

  const handleRetrieveClick = () => {
    setShowRetrieveDialog(true);
  };

  const handleRetrieveClose = () => {
    setShowRetrieveDialog(false);
  };

  const handleDocumentRetrieve = (document) => {
    // Handle the selected document retrieval logic here.
    setSelectedDocument(document);
  };

  const handleTrackClick = () => {
    // Placeholder function for tracking documents
    setFileStatus('Tracking...'); // Placeholder status
    // Add your actual tracking logic here
    setTimeout(() => {
      setFileStatus('Tracked Successfully');
    }, 2000); // Simulate a delay for demonstration
    setShowTrackDialog(true);
  };

  const handleShareClick = () => {
    // Placeholder function for sharing documents
    console.log('Sharing...'); // Placeholder message
    // Add your actual sharing logic here
    setTimeout(() => {
      console.log('Shared Successfully');
    }, 2000); // Simulate a delay for demonstration
    setShowShareDialog(true);
  };

  const handleShareClose = () => {
    setShowShareDialog(false);
  };

  const handleDocumentShare = () => {
    // Handle the sharing logic here, e.g., send an email or message
    console.log(`Sharing with: ${recipient}`);
    console.log(`Content: ${shareContent}`);
  };

  useEffect(() => {
    // Set a timer to hide the success message after 3 seconds (3000 milliseconds)
    if (uploadSuccess) {
      const timer = setTimeout(() => {
        setUploadSuccess(false);
      }, 3000);

      // Clean up the timer when the component unmounts
      return () => clearTimeout(timer);
    }
  }, [uploadSuccess]);

  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard, {name}!</h1>
      <p>User Type: {userType}</p>

      {/* Features for lawyer and client */}
      {(userType === 'lawyer' || userType === 'client') && (
        <div className='features'>
          <div className="file-upload">
            <label htmlFor="file-input" className="option-btn">
              Upload File
            </label>
            <input
              type="file"
              id="file-input"
              accept=".pdf, .doc, .docx"
              onChange={handleFileSelect}
              style={{ display: 'none' }}
            />
          </div>

          {/* Navigation Options */}
          <div className="options">
            <button className="option-btn" onClick={handleRetrieveClick}>
              Retrieve
            </button>
            <button className="option-btn" onClick={handleTrackClick}>
              Track
            </button>
            <button className="option-btn" onClick={handleShareClick}>
              Share
            </button>
          </div>
        </div>
      )}

      {/* View Records for judge */}
      {userType === 'judge' && (
        <div className="view-records">
          {/* <button className="option-btn" onClick={handleRetrieveClick}>
            View Records
          </button> */}
          {/* Display uploaded documents for judge */}
          <div className="uploaded-documents">
            {documents.map((document, index) => (
              <div key={index} className="document">
                <p>{document.uploadedBy === 'lawyer' ? 'Lawyer' : 'Client'}: <a href={document.content} target="_blank" rel="noopener noreferrer">{document.name}</a></p>
                {/* You can add more details if needed */}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Retrieve Document Dialog */}
      {showRetrieveDialog && (
        <RetrieveDocument
          onClose={handleRetrieveClose}
          onDocumentSelect={handleDocumentRetrieve}
          documents={userType === 'lawyer' ? lawyerDocuments : clientDocuments} // Pass appropriate uploaded documents
        />
      )}

      {/* Track Document Dialog */}
      {showTrackDialog && (
        <div className="track-document">
          <h2>Track Document Status</h2>
          <p>Status: {fileStatus}</p>
          <button onClick={() => setShowTrackDialog(false)}>Close</button>
        </div>
      )}

      {/* Share Document Dialog */}
      {showShareDialog && (
        <div className="share-document">
          <h2>Share Document</h2>
          <input
            type="text"
            placeholder="Recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
          <textarea
            placeholder="Content"
            value={shareContent}
            onChange={(e) => setShareContent(e.target.value)}
          />
          <button onClick={handleDocumentShare}>Share</button>
          <button onClick={handleShareClose}>Cancel</button>
        </div>
      )}

      {/* Display the selected document */}
      {selectedDocument && (
        <div className="selected-document">
          <p>Selected Document: {selectedDocument}</p>
        </div>
      )}

      {/* Success message */}
      {uploadSuccess && (
        <div className="success-message">
          <p>Uploaded successfully!</p>
        </div>
      )}

      {/* Upload History for lawyer */}
      {userType === 'lawyer' && (
        <div className="lawyer-history">
          <h2>Upload History</h2>
          <div className="uploaded-documents">
            {lawyerDocuments.map((document, index) => (
              <div key={index} className="document">
                <a href={document.content} target="_blank" rel="noopener noreferrer">{document.name}</a>
                {/* You can add more details if needed */}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upload History for client */}
      {userType === 'client' && (
        <div className="client-history">
          <h2>Upload History</h2>
          <div className="uploaded-documents">
            {clientDocuments.map((document, index) => (
              <div key={index} className="document">
                <a href={document.content} target="_blank" rel="noopener noreferrer">{document.name}</a>
                {/* You can add more details if needed */}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
