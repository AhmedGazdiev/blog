import React, { useEffect, useRef } from "react";
import { clickDropDown, closeDropDown } from "../../../utils/clickDronDown";
import { selectData } from "../../../utils/constants";
import "./select.scss";

const Select = ({ select, setSelect, required }) => {
  const toggleRef = useRef(null);
  const contentRef = useRef(null);

  const handleClick = (value) => {
    setSelect(value);
    closeDropDown(toggleRef, contentRef);
  };

  useEffect(() => {
    clickDropDown(toggleRef, contentRef);
  }, [toggleRef, contentRef]);

  return (
    <div className="select">
      <div className="fs-14" ref={toggleRef}>
        {select ? select : "Выберите категорию"}

        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 1L6 6L1 1"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <ul ref={contentRef} className="select_list">
        {selectData?.map((item, index) => (
          <li key={index} onClick={() => handleClick(item.label)}>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;