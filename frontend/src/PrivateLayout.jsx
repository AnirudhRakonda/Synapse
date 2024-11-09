// PrivateLayout.jsx
import React from 'react';
import Navbar from './components/Navbar';

function PrivateLayout({ children }) {
  return (
    <div className="flex">
      <Navbar />
      <main className="ml-48 p-4 flex-1">
        {children}
      </main>
    </div>
  );
}

export default PrivateLayout;
