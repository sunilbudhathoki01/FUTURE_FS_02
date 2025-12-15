import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AuthLayout from "./components/auth/Layout.jsx";

const App = () => {
  return (
    <Routes>
      {/* Redirect root "/" to "/auth" */}
      <Route path="/" element={<Navigate to="/auth" />} />

      {/* Auth routes */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<AuthLogin />} /> {/* /auth */}
        <Route path="login" element={<AuthLogin />} /> {/* /auth/login */}
        <Route path="register" element={<AuthRegister />} />{" "}
        {/* /auth/register */}
      </Route>

      {/* Optional: catch-all 404 page */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default App;
