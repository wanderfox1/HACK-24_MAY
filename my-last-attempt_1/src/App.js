import React, { useState } from 'react';
import Loginsign from './components/Login/Loginsign.js';
import Header from './components/Header/Header.js';
import Pushsection from './components/Push/Pushsection.js';
import Admin from './components/Admin/Admin.js';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle successful authentication
  const handleAuthenticationSuccess = () => {
    setIsAuthenticated(true);
  };

    // Simulate authentication success after 3 seconds (for example)
    setTimeout(() => {
      handleAuthenticationSuccess();
    }, 3000); // Change 3000 to the desired delay in milliseconds
    
  return (
    <div className="App">
      {!isAuthenticated ? (
        <Loginsign onAuthenticationSuccess={handleAuthenticationSuccess} />
      ) : (
        <div>
          {/* <Header />
          <Pushsection /> */}
          <Admin />
        </div>
      )}
    </div>
  );
}

export default App;