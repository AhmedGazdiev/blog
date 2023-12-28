import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Button from "../../../components/Forms/Button/Button";
import Heading from "../../../components/Heading/Heading";
import Input  from "../../../components/Forms/Input/Input";
import "../auth.scss";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/actions/authAction";

const Login = () => {

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = userData;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value.toLowerCase() });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(login(userData))
  };


  return (
    <div className="auth">
      <div className="auth_box">
        <Heading>Войти</Heading>

        <form className="auth_box_form" onSubmit={onSubmit}>
        <Input
            value={username}
            name="username"
            placeholder="Username"
            required
            onChange={handleChange}
          />
          <Input
            value={password}
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />
          <p className="auth_text fs-12">
            <Link to="/forgot">Забыли пароль?</Link>
          </p>
          <Button fullWidth type="submit">
            Войти
          </Button>
        </form>

        <p className="auth_text fs-12">
          Нет аккаунта?
          <Link to="/register">Создать аккаунт</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
