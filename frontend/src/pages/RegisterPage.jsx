import React from 'react';
import { UserRound, Mail, KeyRound } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';
import registerUserRequest from '../api/registerUserRequest';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const queryClient = useQueryClient();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      registerUser({ name, email, password });
      toast.success('register successful');
      setName('');
      setEmail('');
      setPassword('');
      setconfirmPassword('');
    }
  };

  const { mutate: registerUser } = useMutation((newUser) =>
    registerUserRequest(newUser)
  );

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
