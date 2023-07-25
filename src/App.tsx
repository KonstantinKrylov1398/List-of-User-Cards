import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RegistrationPage, LoginPage, UsersPage, UserPage } from "src/pages";
import { LOGIN, REGISTER, USERS, USER_ID } from "./constans";
import "./main.global.css";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={LOGIN} />} />
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={REGISTER} element={<RegistrationPage />} />
        <Route path={USERS} element={<UsersPage />} />
        <Route path={USER_ID} element={<UserPage />} />
        <Route path="*" element={<h1> Не найдена страница</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
