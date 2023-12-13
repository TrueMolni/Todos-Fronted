import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const navigate = useNavigate();

  const handleLogin = async e => {
    e.preventDefault();
    try {
      // const response = await axios.post('/api/login', { username, password });
      // const token = response.data.token;
      // localStorage.setItem('token', token);
      // navigate('/todos');
    } catch (error) {
      console.error('Помилка при вході:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
      <div className="max-w-md w-full p-8 bg-gray-900 rounded shadow-lg">
        <h2 className="text-2xl mb-4">Увійти до свого облікового запису</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium">
              Ім'я користувача:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="mt-1 p-2 w-full bg-gray-800 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Пароль:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="mt-1 p-2 w-full bg-gray-800 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
          >
            Увійти
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
