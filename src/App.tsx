import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Registration } from "./pages/RegistrationPage";
import "./main.global.css";
import { Autorization } from "./pages/AutorizationPage";
import { AllUsers } from "./pages/AllUsers";
import { UserPage } from "./pages/UserPage";
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Autorization />} />
        <Route path="register" element={<Registration />} />
        <Route path="allusers" element={<AllUsers />} />
        <Route path="user" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}
