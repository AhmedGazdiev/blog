import React, { useRef } from "react";
import Button from "../../Forms/Button/Button";
import { Link } from "react-router-dom";
import { clickDropDown } from "../../../utils/clickDronDown";
import { useDispatch } from 'react-redux'
import { logout } from "../../../redux/actions/authAction";

const NavUser = ({ avatar }) => {
  const toggleRef = useRef(null)
  const contentRef = useRef(null)

  const dispatch = useDispatch();

  clickDropDown(toggleRef, contentRef)

  const handleLogout = () => {
    dispatch(logout());
  };


  return (
    <div className="nav_user">
      <Button to="/add_post">Добавить пост</Button>
      <div className="nav_user_ava" ref={toggleRef}>
        <img src={avatar} alt="" />
        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.83519 5.76944L0.508732 2.28094C-0.0182074 1.85606 -0.135798 1.36991 0.15596 0.82248C0.446609 0.27416 0.966339 0 1.71515 0H10.2849C11.0337 0 11.5534 0.27416 11.844 0.82248C12.1358 1.36991 12.0182 1.85606 11.4913 2.28094L7.16481 5.76944C6.99841 5.90361 6.81814 6.00424 6.62401 6.07133C6.42987 6.13841 6.22187 6.17196 6 6.17196C5.77813 6.17196 5.57013 6.13841 5.37599 6.07133C5.18186 6.00424 5.00159 5.90361 4.83519 5.76944Z"
            fill="black"
          />
        </svg>

        <ul className="nav_user_list" ref={contentRef}>
          <li className="nav_user_item">
            <Link className="nav_user_list_link">Профиль</Link>
          </li>
          <li className="nav_user_item" onClick={handleLogout}>
            <div className="nav_user_list_link">Выйти</div>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default NavUser;
