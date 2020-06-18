import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={"login"} component={"input"} placeholder={"Login"} />
      </div>
      <div>
        <Field name={"password"} component={"input"} placeholder={"Password"} />
      </div>
      <div>
        <Field name={"rememberMe"} component={"input"} type={"checkbox"} />
        remember me
      </div>
      <button>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
