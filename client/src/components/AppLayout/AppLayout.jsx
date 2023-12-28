import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AppLayout = () => {
  const { isAuth } = useSelector((state) => state.auth);

  const logged = localStorage.getItem('token')

  if (!isAuth && !logged) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="app-layout">
      <Outlet />
    </div>
  );
};

export default AppLayout;
