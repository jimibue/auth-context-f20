import React from "react";

export default class Demo extends React.Component {
  render() {
    return (
      <>
        <div>you nested stuff here</div>
        {/* React thing here */}
        {this.props.children}
      </>
    );
  }
}

// //
// <Demo>
//   <h1>here is my stuff</h1>
//   <h1>here is my stuff</h1>
//   <h1>here is my stuff</h1>
//   <h1>here is my stuff</h1>
//   <AccountForm />
// </Demo>;
