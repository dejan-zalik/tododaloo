import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className="w-full p-6">
      <Navbar />
      <Toaster position="top-center" toastOptions={{ duration: 1500 }} />
      <Outlet />
    </div>
  );
};
export default App;
