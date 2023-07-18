import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RegistrationPage, LoginPage, UsersPage, UserPage } from "./pages";
import "./main.global.css";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegistrationPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:id" element={<UserPage />} />
        <Route path="*" element={<h1>ну не найдена страница</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
