import axios from "axios";
import { API_URL } from "src/constans";

export const getAll = (page = 1) =>
  axios
    .get(`${API_URL}/users`, { params: { page, per_page: 8 } })
    .then((resp) => resp.data);
