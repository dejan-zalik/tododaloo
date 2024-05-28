import React from 'react';
import { Mail, KeyRound } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      <form>
        <div className="container py-1">
          <label className="input input-bordered flex items-center gap-2">
            <Mail size={20} />
            <input type="text" className="grow" placeholder="email" />
          </label>
        </div>
        <div className="container py-1">
          <label className="input input-bordered flex items-center gap-2">
            <KeyRound size={20} />
            <input type="password" className="grow" placeholder="password" />
          </label>
        </div>
        <div className="py-1 flex justify-between">
          <button className="btn">Log in</button>
          <span className="my-auto">
            No account yet?{' '}
            <span className="no-underline hover:underline">
              <Link to="/registerpage">Register</Link>
            </span>
          </span>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
