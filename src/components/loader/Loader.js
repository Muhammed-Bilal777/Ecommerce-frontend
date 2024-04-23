import React from "react";
import style from "./Loader.module.scss";
import ReactDom from "react-dom";
import LoaderImage from "../../assets/loader.gif";

const Loader = () => {
  return ReactDom.createPortal(
    <div className={style.wrapper}>
      <div className={style.loader}>
        <img src={LoaderImage} alt="Loading"></img>
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export const Spinner = () => {
  return (
    <div className="--center-all">
      <img src={LoaderImage} alt="Loading" width={40}></img>
    </div>
  );
};

export default Loader;
