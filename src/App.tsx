import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Registration } from "./pages/RegistrationPage";
import "./main.global.css";
import { Autorization } from "./pages/AutorizationPage";
import { AllUsers } from "./pages/AllUsers";
import { UserPage } from "./pages/UserPage";
export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="login" element={<Autorization />} />
      <Route path="register" element={<Registration />} />
      <Route path="users" element={<AllUsers />} />
      <Route path="users/:id" element={<UserPage />} />
    </Routes>
  );
}
