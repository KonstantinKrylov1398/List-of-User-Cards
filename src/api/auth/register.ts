import axios from "axios";
import { API_URL } from "src/constans";

type Params = {
  [params: string]: string;
};

export const register = ({ email, password }: Params) =>
  axios.post(`${API_URL}/register`, {
    email,
    password,
  });
