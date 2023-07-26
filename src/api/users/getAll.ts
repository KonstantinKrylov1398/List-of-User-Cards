import axios from "axios";
import { API_URL } from "src/constans";

export const getAll = (page: number) =>
  axios
    .get(`${API_URL}/users`, { params: { page, per_page: 8 } })
    .then((response) => response.data);
