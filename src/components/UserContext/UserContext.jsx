import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = userData => {
    // Логіка авторизації, отримання даних з бекенду і т.д.
    setUser(userData);
  };

  const logout = () => {
    // Логіка виходу, видалення токенів і т.д.
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
