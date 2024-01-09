import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    const { name } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h3>Count: {count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: Bangalore</h3>
      </div>
    );
  }
}

export default UserClass;
