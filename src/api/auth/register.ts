import axios from "axios";
import { API_URL } from "src/constans";
import { Auth } from "src/types/Auth";

export const register = ({ email, password }: Auth.Entity) =>
  axios.post(`${API_URL}/register`, {
    email,
    password,
  });
