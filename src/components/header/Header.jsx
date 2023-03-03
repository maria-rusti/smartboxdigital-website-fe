import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={"/Login"}>
        <Button>log in</Button>
      </Link>
      <Link to={"/Home"}>
        <Button>Home</Button>
      </Link>
    </header>
  );
};

export default Header;
