import React from "react";
import apiClient from "../Api/api-client";
import { API_STATUS } from "../Utils/constants";
import { useNavigate } from "react-router-dom";

const useSignIn = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const navigate = useNavigate()

  const handleSubmit = (evt) => {
    evt.preventDefault();

    apiClient
      .post("signup", {
        name: name,
        email: email,
        secret: password,
        key: username,
      })
      .then((res) => {
        if (res.data.isOk) {
          localStorage.setItem(API_STATUS, res.data.isOk);
          navigate('/books')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    handleSubmit,
    name,
    setName,
    setEmail,
    email,
    password,
    setPassword,
    username,
    setUsername,
  };
};

export default useSignIn;
