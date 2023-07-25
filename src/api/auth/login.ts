import axios from "axios";
import { API_URL } from "src/constans";
import { Auth } from "src/types/auth";

export const login = ({ email, password }: Auth.Entity) =>
  axios.post(`${API_URL}/login`, {
    email,
    password,
  });
