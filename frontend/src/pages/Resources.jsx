import React, { useState } from 'react';

const Resources = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState('');

  const handleAddResourceClick = (resourceType) => {
    setSelectedResource(resourceType);
    setShowModal(true);
  };

  const handleFileUpload = (e) => {
    console.log(`Uploaded ${selectedResource} file:`, e.target.files[0]);
    // Here you can handle the file upload logic (e.g., send to server)
  };

  return (
    <div className="p-8 text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold">My Collection</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center text-blue-500 border border-blue-500 px-4 py-2 rounded-lg"
        >
          <i className="fas fa-share-alt mr-2"></i> Add Resource
        </button>
      </div>

      {/* Resource Categories Grid */}
      <div className="grid grid-cols-4 gap-8 mb-8">
        <div className="text-center">
          <div className="h-48 w-36 mx-auto mb-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Book_pile.jpg/330px-Book_pile.jpg"
              alt="Books"
              className="h-full w-full object-cover"
            />
          </div>
          <p>PDF’s (Books)</p>
        </div>
        <div className="text-center">
          <div className="h-48 w-36 mx-auto mb-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Computer_Screen_with_Video_Icon.jpg/330px-Computer_Screen_with_Video_Icon.jpg"
              alt="Video Lectures"
              className="h-full w-full object-cover"
            />
          </div>
          <p>Video Lectures</p>
        </div>
        <div className="text-center">
          <div className="h-48 w-36 mx-auto mb-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Notebook_and_pen.jpg/800px-Notebook_and_pen.jpg"
              alt="Notes"
              className="h-full w-full object-cover"
            />
          </div>
          <p>Notes</p>
        </div>
        <div className="text-center">
          <div className="h-48 w-36 mx-auto mb-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Question_paper.jpg/330px-Question_paper.jpg"
              alt="PYQs"
              className="h-full w-full object-cover"
            />
          </div>
          <p>PYQ’s</p>
        </div>
      </div>

      {/* Public Resources */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold">Public Resources</h1>
        <div className="relative">
          <input
            type="text"
            className="bg-gray-300 text-black rounded-full pl-4 pr-8 py-1"
            placeholder="Search"
          />
          <i className="fas fa-search absolute right-2 top-1/2 transform -translate-y-1/2 text-black"></i>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8">
        <div className="text-center">
          <div className="h-32 w-24 mx-auto mb-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Book_pile.jpg/330px-Book_pile.jpg"
              alt="Books"
              className="h-full w-full object-cover"
            />
          </div>
          <p>PDF’s (Books)</p>
        </div>
        <div className="text-center">
          <div className="h-32 w-24 mx-auto mb-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Computer_Screen_with_Video_Icon.jpg/330px-Computer_Screen_with_Video_Icon.jpg"
              alt="Video Lectures"
              className="h-full w-full object-cover"
            />
          </div>
          <p>Video Lectures</p>
        </div>
        <div className="text-center">
          <div className="h-32 w-24 mx-auto mb-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Notebook_and_pen.jpg/800px-Notebook_and_pen.jpg"
              alt="Notes"
              className="h-full w-full object-cover"
            />
          </div>
          <p>Notes</p>
        </div>
        <div className="text-center">
          <div className="h-32 w-24 mx-auto mb-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Question_paper.jpg/330px-Question_paper.jpg"
              alt="PYQs"
              className="h-full w-full object-cover"
            />
          </div>
          <p>PYQ’s</p>
        </div>
      </div>

      {/* Modal for Adding Resource */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Add New Resource</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="resource-type" className="block mb-2">Select Resource Type:</label>
                <select
                  id="resource-type"
                  className="w-full p-2 border rounded"
                  value={selectedResource}
                  onChange={(e) => setSelectedResource(e.target.value)}
                >
                  <option value="">Choose a Resource</option>
                  <option value="PDF">PDF</option>
                  <option value="Video">Video</option>
                  <option value="Notes">Notes</option>
                  <option value="PYQ">PYQ</option>
                </select>
              </div>

              {selectedResource && (
                <div>
                  <label htmlFor="file-upload" className="block mb-2">Upload {selectedResource} File:</label>
                  <input
                    type="file"
                    id="file-upload"
                    accept={selectedResource === 'Video' ? 'video/*' : 'application/pdf'}
                    onChange={handleFileUpload}
                    className="w-full p-2 border rounded"
                  />
                </div>
              )}
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white p-2 rounded"
              >
                Close
              </button>
              <button
                onClick={() => {
                  // Handle the submit logic for the resource
                  console.log('Resource added');
                  setShowModal(false);
                }}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Add Resource
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resources;
