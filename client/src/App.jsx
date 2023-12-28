import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";
import AddPost from "./pages/AddPost/AddPost";
import Register from "./pages/Auth/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Loading from "./components/Loading/Loading";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./redux/actions/authAction";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import AppLayout from "./components/AppLayout/AppLayout";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Loading />

      <div className="container">
        <Routes>

          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/add_post" element={<AddPost />} />
          </Route>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
