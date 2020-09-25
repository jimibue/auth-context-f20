import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AccountContext } from "../providers/AccountProvider";

// For Basic setup only please change
const NavBar1 = () => {
  // using the useContextHook instead of our consumer
  const auth = useContext(AccountContext);
  return (
    <div style={styles.navbar}>
      <Link to="/">Home</Link>
      <span style={{ marginRight: "10px" }}></span>
      <Link to="/thingsDemo">Things</Link>
      <span style={{ marginRight: "10px" }}></span>
      <Link to="/account/profile">{auth.username}</Link>
    </div>
  );
};

const styles = {
  navbar: {
    background: "black",
    padding: "10px",
  },
};

export default NavBar1;
