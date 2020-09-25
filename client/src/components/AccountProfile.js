import React from "react";
import Account from "./Account";
import AccountForm from "./AccountForm";
import AccountFormFunc from "./AccountFormFunc";
import Demo from "./Demo";

class AccountProfile extends React.Component {
  render() {
    return (
      <div>
        <h1>Account Profile</h1>
        <Account />
        <AccountForm passMePlease="yoyoyo" />
        {/* <AccountFormFunc /> */}
        <Demo>
          <p>this is this.props.children</p>
        </Demo>
      </div>
    );
  }
}

export default AccountProfile;
