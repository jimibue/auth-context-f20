import React from "react";
import { Form, Input, Select } from "semantic-ui-react";

class AccountForm extends React.Component {
  // userName and membershipLevel, datejoined, but that need to be in form
  state = { username: "", membershipLevel: "" };

  // events bind this to the event, by making an arrow I bind this to the class
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  // handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmitYO = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmitYO}>
        <Form.Field
          control={Input}
          name="username"
          label="Username"
          placeholder="Username"
          onChange={this.handleChange}
        />
        <Form.Field
          name="membershipLevel"
          control={Select}
          label="Membership Label"
          options={membershipOptions}
          placeholder="Membership Label"
          onChange={this.handleChange}
        />
        <Form.Button>add</Form.Button>
      </Form>
    );
  }
}

const membershipOptions = [
  { key: "b", text: "Bronze", value: "Bronze" },
  { key: "s", text: "Silver", value: "Silver" },
  { key: "g", text: "Gold", value: "Gold" },
];
export default AccountForm;
