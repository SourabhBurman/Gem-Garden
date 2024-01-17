import { Link } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Link to="/" as={NavLink}>
        Home
      </Link>
      <Link to="/contactUs" as={NavLink}>
        Contact
      </Link>
      <Link to="/account" as={NavLink}>
        Account
      </Link>
      <Link to="/bag" as={NavLink}>
        Bag
      </Link>
    </>
  );
};
