import axios from "axios";
import { API_URL } from "src/constans";

export const logout = () =>
  axios.post(`${API_URL}/logout`).then((response) => response.data);
