import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { API_URL } from "../../constans";
type valueLogin = {
  email: string;
  password: string;
};

export const postLogin = (
  value: valueLogin,
  navigate: NavigateFunction,
  api: string
) =>
  axios
    .post(`${API_URL}/${api}`, {
      email: value.email,
      password: value.password,
    })
    .then((response) => {
      localStorage.setItem("getToken", JSON.stringify(response.data));
      navigate("/users");
    });
