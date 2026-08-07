// function User(props) {
//   return (
//     <>
//       <h1>User name: {props.name}</h1>
//       <h2>Age: {props.age}</h2>
//     </>
//   );
// }

// export default User;



import React from "react";

class User extends React.Component {
  render() {
    return (
      <>
        <h1>Name: {this.props.name}</h1>
        <h2>Age: {this.props.age}</h2>
      </>
    );
  }
}

export default User;