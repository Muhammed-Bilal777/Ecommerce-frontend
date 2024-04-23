import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return <div className={style.footer}> &copy; {year} All Rights Reserved</div>;
};

export default Footer;
