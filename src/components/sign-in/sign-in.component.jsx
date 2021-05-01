import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
    //if event.name===email this line gonna be setState({email: event.value})
    //if event.name===password this line gonna be setState({password: event.value})
    console.log({ [name]: value });
    console.log(this.state);
    console.log("===================");
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sing in with your email and password</span>

        <from onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.email}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <CustomButton type="submit">Sign in</CustomButton>
        </from>
      </div>
    );
  }
}

export default SignIn;
