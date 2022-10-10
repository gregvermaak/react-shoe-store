import React from "react";
import { FiMenu } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <nav className="nav">
      <FiMenu className="menu-icon" />
      <Logo />
      <FaShoppingCart className="cart-icon" />
    </nav>
  );
};

export default NavBar;
