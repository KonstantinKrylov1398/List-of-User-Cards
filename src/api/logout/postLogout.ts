import axios from "axios";
import { API_URL } from "../../constans";

export const postLogout = () =>
  axios.post(`${API_URL}/logout`).then((resp) => resp.data);
