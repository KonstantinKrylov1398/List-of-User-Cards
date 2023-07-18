import axios from "axios";
import { API_URL } from "../../constans";

export const postLogin = (value, navigate, api) =>
  axios
    .post(`${API_URL}/${api}`, {
      email: value.email,
      password: value.password,
    })
    .then((response) => {
      localStorage.setItem("getToken", JSON.stringify(response.data));
      navigate("/users");
    });
