import React from 'react';
import { Outlet, Link } from 'react-router-dom';
// import { useUser } from '../UserContext';

const SharedLayout = () => {
  // const { user, logout } = useUser();

  return (
    <>
      <div className="container mx-auto p-4 flex justify-between items-center">
        <nav className="mb-4">
          <Link to="/login" className="mr-4 text-blue-500 hover:underline">
            Вхід
          </Link>
          <Link to="/register" className="mr-4 text-green-500 hover:underline">
            Реєстрація
          </Link>
          <Link to="/todos" className="mr-4 text-yellow-500 hover:underline">
            Todos
          </Link>
          <Link to="/ira" className="text-pink-600 hover:underline">
            Ira
          </Link>
        </nav>
        {/* {user && (
          <div className="flex items-center">
            <span className="mr-2">Вітаємо, {user.name}!</span>
            <button onClick={logout} className="text-red-500 hover:underline">
              Вийти
            </button>
          </div>
        )} */}
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
