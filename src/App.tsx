import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RegistrationPage, LoginPage, UsersPage, UserPage } from "src/pages";
import { ROUTES } from "./constans";
import "./main.global.css";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={ROUTES.LOGIN} />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.REGISTER} element={<RegistrationPage />} />
        <Route path={ROUTES.USERS} element={<UsersPage />} />
        <Route path={ROUTES.USER} element={<UserPage />} />
        <Route path="*" element={<h1> Не найдена страница</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
