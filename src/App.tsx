import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Registration } from "./pages/RegistrationPage";
import "./main.global.css";
import { Autorization } from "./pages/AutorizationPage";
import { AllUsers } from "./pages/AllUsers";
import { UserPage } from "./pages/UserPage";
import { PublicRoute } from "./routes/PublicRoute";
import { PrivateRoute } from "./routes/PrivateRoute";
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="login"
          element={
            <PublicRoute>
              <Autorization />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <Registration />
            </PublicRoute>
          }
        />
        <Route
          path="users"
          element={
            <PrivateRoute>
              <AllUsers />
            </PrivateRoute>
          }
        />
        <Route
          path="users/:id"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<h1>ну не найдена страница</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
