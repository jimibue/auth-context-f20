import React from "react";
import { Form } from "semantic-ui-react";

class AccountForm extends React.Component {
  // userName and membershipLevel, datejoined, but that need to be in form
  state = { username: "", membershipLevel: "" };

  // events bind this to the event, by making an arrow I bind this to the class
  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmitYO = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmitYO}>
        <Form.Input
          label="New Username"
          type="text"
          name="username" // this is going to be e.target.name need match state
          value={this.state.username}
          onChange={this.handleChange}
        />
        <Form.Select
          label="Membership Level"
          name="membershipLevel" // this is going to be e.target.name need match state
          options={membershipOptions}
          value={this.state.membershipLevel}
          onChange={this.handleChange}
        />
        <Form.Button>add</Form.Button>
      </Form>
    );
  }
}

const membershipOptions = [
  { text: "Bronze!", value: "Bronze" },
  { text: "Gold!", value: "Gold" },
];
export default AccountForm;
