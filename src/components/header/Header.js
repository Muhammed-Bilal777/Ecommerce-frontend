import { Link, NavLink } from "react-router-dom";
import style from "./Header.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import { RiMenuFoldFill } from "react-icons/ri";
import { CgCloseR } from "react-icons/cg";
import { useState } from "react";

export const logo = (
  <div className={style.logo}>
    <Link to="/">
      <h2>
        Shop<span>Ito</span>
      </h2>
    </Link>
  </div>
);

const activeLink = ({ isActive }) => (isActive ? `$style.active` : "");

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPage, setScrollPage] = useState(false);

  const fixNavBar = () => {
    if (window.scrollY > 50) {
      setScrollPage(!false);
    } else {
      setScrollPage(false);
    }
  };

  window.addEventListener("scroll", fixNavBar);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };

  const cart = (
    <span className={style.cart}>
      <Link to="/cart">
        Cart
        <FaShoppingCart size={20} />
        <p>0</p>
      </Link>
    </span>
  );
  return (
    <header className={scrollPage ? `${style.fixed}` : ""}>
      <div className={style.header}>
        {logo}
        <nav
          className={showMenu ? `${style["show-nav"]}` : `${style["hide-nav"]}`}
        >
          <div
            className={
              showMenu
                ? `${style["nav-wrapper"]} ${style["show-nav-wrapper"]}`
                : `${style["nav-wrapper"]}`
            }
            onClick={hideMenu}
          ></div>
          <ul>
            <li className={style["logo-mobile"]} onClick={hideMenu}>
              {logo}
              <CgCloseR size={22} color="#fff" onClick={hideMenu} />
            </li>
            <li>
              <NavLink to="/shop" className={activeLink}>
                Shop{" "}
              </NavLink>
            </li>
          </ul>

          <div className={style["header-right"]}>
            <span className={style.links}>
              <NavLink to={"login"} className={activeLink}>
                login
              </NavLink>
              <NavLink to={"register"} className={activeLink}>
                Register
              </NavLink>
              <NavLink to={"order-history"} className={activeLink}>
                My Order
              </NavLink>
            </span>
            {cart}
          </div>
        </nav>
        <div className={style["menu-icon"]}>
          {cart} <RiMenuFoldFill size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
