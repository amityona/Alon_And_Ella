import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">login </Link>
      <Link to="/foodTransfer" >foodTransfer </Link>
      <Link to="/HelperList"> HelperList </Link>
    </div>
  );
};

export default Navbar;