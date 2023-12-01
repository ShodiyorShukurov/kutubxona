import React from "react";
import apiClient from "../Api/api-client";

const useSignIn = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(email);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("secret", password);
    formData.append("key", username);

    apiClient
      .post("signup", {
        name: name,
        email: email,
        secret: password,
        key: username,
      })
      .then((res) => {
        console.log(res.data);
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
