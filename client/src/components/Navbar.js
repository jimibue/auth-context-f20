import React from "react";
import { Link } from "react-router-dom";
import { AccountConsumer } from "../providers/AccountProvider";

// For Basic setup only please change
const NavBar = () => {
  return (
    <AccountConsumer>
      {(value) => (
        <div style={styles.navbar}>
          <Link to="/">Home</Link>
          <span style={{ marginRight: "10px" }}></span>
          <Link to="/thingsDemo">Things</Link>
          <span style={{ marginRight: "10px" }}></span>
          <Link to="/account/profile">{value.username}</Link>
        </div>
      )}
    </AccountConsumer>
  );
};

const styles = {
  navbar: {
    background: "black",
    padding: "10px",
  },
};

export default NavBar;

// without the useContext Hook (messier way)
// {
/* <AccountConsumer>
  {value =>(
    //return jsx, but the reason we wrap in the function
    // is now we have access to value, ie in this case our
    // state of our AccountProdicer
  )
  }
</AccountConsumer> */
// }

/* <AccountConsumer>
  {value =>(/*jsx here )*/
// </AccountConsumer> */
