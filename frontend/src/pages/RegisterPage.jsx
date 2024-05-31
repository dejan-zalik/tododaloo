import React, { useState } from 'react';
import { UserRound, Mail, KeyRound } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import registerUserRequest from '../api/registerUserRequest';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        await registerUserRequest({ name, email, password });
        toast.success('register successful');
        navigate('/');
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container py-1">
        <label className="input input-bordered flex items-center gap-2">
          <UserRound size={20} />
          <input
            type="text"
            className="grow"
            placeholder="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
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
      <div className="container py-1">
        <label className="input input-bordered flex items-center gap-2">
          <KeyRound size={20} />
          <input
            type="password"
            className="grow"
            placeholder="re-enter password"
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
          />
        </label>
      </div>
      <div className="py-1 flex justify-between">
        <button type="submit" className="btn">
          Register
        </button>
        <span className="my-auto">
          Already have an account?{' '}
          <span className="no-underline hover:underline">
            <Link to="/loginpage">Log in</Link>
          </span>
        </span>
      </div>
    </form>
  );
};

export default RegisterPage;
