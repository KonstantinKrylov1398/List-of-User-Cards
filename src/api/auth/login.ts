import axios from "axios";
import { API_URL } from "src/constans";

type Params = {
  [params: string]: string;
};

export const login = ({ email, password }: Params) =>
  axios.post(`${API_URL}/login`, {
    email,
    password,
  });
