import React from 'react';
import { UserRound, Mail, KeyRound } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      toast.success('register successful');
      console.log(username);
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div className="container py-1">
        <label className="input input-bordered flex items-center gap-2">
          <Mail size={20} />
          <input
            type="text"
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
