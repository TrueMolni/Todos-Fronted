import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className=" overflow-hidden App min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white p-8 gap-10">
      <h1 className="text-4xl mb-8">Сторінку не знайдено</h1>

      <Link
        to="/"
        className="ml-2 rounded-r p-2 bg-blue-500 text-white cursor-pointer hover:bg-blue-700"
      >
        На головну
      </Link>
    </div>
  );
};

export default NotFoundPage;
