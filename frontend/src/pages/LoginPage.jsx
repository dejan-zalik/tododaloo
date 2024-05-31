import React, { useState } from 'react';
import { Mail, KeyRound } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import loginUserRequest from '../api/loginUserRequest';
import { toast } from 'react-hot-toast';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('please enter both email and password');
      // return;
    } else {
      try {
        await loginUserRequest({ email, password });
        toast.success('login successful');
        navigate('/');
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container py-1">
          <label className="input input-bordered flex items-center gap-2">
            <Mail size={20} />
            <input
              type="email"
              className="grow"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="container py-1">
          <label className="input input-bordered flex items-center gap-2">
            <KeyRound size={20} />
            <input
              type="password"
              className="grow"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
