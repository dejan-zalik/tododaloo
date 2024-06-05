import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from './context/Contexts.js';
import { useState } from 'react';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <div className="w-full p-6">
      <AuthContext.Provider value={[currentUser, setCurrentUser]}>
        <Navbar />
        <Toaster position="top-center" toastOptions={{ duration: 1500 }} />
        <Outlet />
      </AuthContext.Provider>
    </div>
  );
};
export default App;
