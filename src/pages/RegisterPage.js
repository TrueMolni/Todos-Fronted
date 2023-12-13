import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const navigate = useNavigate();

  const handleRegister = async e => {
    e.preventDefault();
    try {
      // const response = await axios.post('/api/register', {
      //   username,
      //   password,
      // });
      // const token = response.data.token;
      // localStorage.setItem('token', token);
      // navigate('/todos');
    } catch (error) {
      console.error('Помилка при реєстрації:', error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl mb-4">Реєстрація</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-600"
          >
            Ім'я користувача:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Пароль:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded hover:bg-green-700"
        >
          Зареєструватися
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
