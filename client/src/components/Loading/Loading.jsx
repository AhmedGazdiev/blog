import React from "react";
import { useSelector } from "react-redux";
import "./loading.scss";

const Loading = () => {
  const { loading } = useSelector((state) => state.alert);

  return (
    <>
      {loading && (
        <div className="loading">
          <div className="loading_box">
            <div className="spinner">
              <div></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
