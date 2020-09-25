import React from "react";

//Setup the initial context
export const AccountContext = React.createContext();

// React.creatContext(); returns {Consumer, Provider}

//Create a consumer that can be exported and used by other components
export const AccountConsumer = AccountContext.Consumer;

//Create the provider
class AccountProvider extends React.Component {
  // we are going to make that avaible to other components
  // global state
  state = {
    username: "Frank sir",
    dateJoined: "45/34/2002",
    membershipLevel: "Gold",
    updateAccount: (blah) => this.updateAccount(blah), // this is a new function
    // blah is only scope
    //  blah better be {username, membershipLevel}
    // updateAccount: this.updateAccount, // this is a new function
  };

  // Let's assume accountX argument will look like {username, membershipLevel}
  // on method defintion
  // accountX is only scoped to this function
  // accountX = {username:'Tim', membershipLevel:'Gold}
  updateAccount = (accountX) => {
    // this.setState({
    //   username: accountX.username,
    //   membershipLevel: accountX.membershipLevel,
    // });

    //samething
    this.setState({ ...accountX });
  };

  // updateAccountcallback(blahX){
  //   this.updateAccount(blahX)
  // }

  render() {
    return (
      <AccountContext.Provider value={this.state}>
        {this.props.children}
      </AccountContext.Provider>
    );
  }
}

export default AccountProvider;
