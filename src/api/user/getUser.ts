import axios from "axios";
import { API_URL } from "../../constans";

export const getUser = (id: string) =>
  axios.get(`${API_URL}/users/${id}`).then((resp) => resp.data);
