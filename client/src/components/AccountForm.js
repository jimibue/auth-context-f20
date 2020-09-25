import React from "react";
import { Form, Input, Select } from "semantic-ui-react";
import { AccountConsumer } from "../providers/AccountProvider";

// not using useContext hook using
class AccountForm extends React.Component {
  // userName and membershipLevel, datejoined, but that need to be in form
  state = {
    username: this.props.username,
    membershipLevel: this.props.membershipLevel,
  };

  // events bind this to the event, by making an arrow I bind this to the class
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  // handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmitYO = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.updateAccountProp(this.state);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmitYO}>
        <Form.Field
          control={Input}
          name="username"
          label="Username"
          value={this.state.username}
          placeholder="Username"
          onChange={this.handleChange}
        />
        <Form.Field
          name="membershipLevel"
          control={Select}
          value={this.state.membershipLevel}
          label="Membership Label"
          options={membershipOptions}
          placeholder="Membership Label"
          onChange={this.handleChange}
        />
        <Form.Button>Update: {this.props.passMePlease}</Form.Button>
      </Form>
    );
  }
}

const membershipOptions = [
  { key: "b", text: "Bronze", value: "Bronze" },
  { key: "s", text: "Silver", value: "Silver" },
  { key: "g", text: "Gold", value: "Gold" },
];

// wrapping AccountForm in my AccountConsume so i can
// add username and  membershipLevel props to AccountForm

// good practice with HOC's
const ConnectedAccountForm = (props) => {
  return (
    <AccountConsumer>
      {(value) => (
        <AccountForm
          {...props} // passing any props that were given prevoulsy
          username={value.username}
          membershipLevel={value.membershipLevel}
          updateAccountProp={value.updateAccount}
        />
      )}
    </AccountConsumer>
  );
};

export default ConnectedAccountForm;
