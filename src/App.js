import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { UserProvider } from './components/UserContext';

// import PrivateRoute from './components/PrivatRoutes/PrivatRoutes';
// import PublicRoute from './components/PublicRoutes/PublicRoutes';

import SharedLayout from './components/SharedLayout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import TodosPage from './pages/Todos';
import IraTodosPage from './pages/IraTodos';

function App() {
  return (
    <Router basename="/">
      {/* <UserProvider> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          {/* <Route element={<PublicRoute />}> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* </Route> */}
          {/* <Route element={<PrivateRoute />}> */}
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/ira" element={<IraTodosPage />} />
          {/* </Route> */}
        </Route>
      </Routes>
      {/* </UserProvider> */}
    </Router>
  );
}

export default App;
