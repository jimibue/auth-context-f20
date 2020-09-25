import React, { useState, useContext } from "react";
import { Form, Input, Select } from "semantic-ui-react";
import { AccountContext } from "../providers/AccountProvider";

// not using useContext hook using
function AccountFormFunc() {
  const account = useContext(AccountContext);
  const [username, setUsername] = useState(account.username);
  const [membershipLevel, setMembershipLevel] = useState(
    account.membershipLevel
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    account.updateAccount({ username, membershipLevel });
  };

  const membershipOptions = [
    { key: "b", text: "Bronze", value: "Bronze" },
    { key: "s", text: "Silver", value: "Silver" },
    { key: "g", text: "Gold", value: "Gold" },
  ];

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field
        control={Input}
        name="username"
        label="Username"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Form.Field
        name="membershipLevel"
        control={Select}
        value={membershipLevel}
        label="Membership Label"
        options={membershipOptions}
        placeholder="Membership Label"
        onChange={(e) => setMembershipLevel(e.target.value)}
      />
      <Form.Button>Update</Form.Button>
    </Form>
  );
}

export default AccountFormFunc;
