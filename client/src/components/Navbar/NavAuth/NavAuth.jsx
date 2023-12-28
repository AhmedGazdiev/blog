import Button from "../../Forms/Button/Button";
import React from "react";

const NavAuth = () => {
  return (
    <div className="nav_auth">
      <Button to="/login">Войти</Button>
      <Button to="/register" variant="outline">
        Регистрация
      </Button>
    </div>
  );
};

export default NavAuth;
