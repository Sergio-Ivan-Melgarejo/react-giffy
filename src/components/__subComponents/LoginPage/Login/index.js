import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
// Components
import Spinner from "components/Spinner";
// Hook
import useAuth from "hooks/useAuth";
// context
import { Context } from "context/LanguageContext";
// styles
import { Styles } from "./styled";

const initialValues = {
  username: "",
  password: "",
};

const validateFields = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Required username";
  } else if (values.username.length <= 3) {
    errors.username = "Username must be longer than three characters";
  }

  if (!values.password) {
    errors.password = "Required password";
  } else if (values.password.length <= 5) {
    errors.password = "Password must be longer than five characters";
  }

  return errors;
};

const Login = ({ onClose }) => {
  const { text } = React.useContext(Context);
  const navigate = useNavigate();
  const { login, isLogged, isLoading, error } = useAuth();

  React.useEffect(() => {
    if (isLogged) {
      navigate("/");
      onClose && onClose();
    }
  }, [isLogged, navigate, onClose]);

  const handleSubmit = (values) => {
    const { username, password } = values;
    login({ username, password });
  };

  if (isLoading) return <Spinner />;

  return (
    <Styles>
      <div className="login-container">
        <h2>{text.Login.title}</h2>
        <Formik
          initialValues={initialValues}
          validate={validateFields}
          onSubmit={handleSubmit}
        >
          {({ touched, errors }) => (
            <Form>
              <div>
                <label htmlFor="username">{text.Login.inputUser}</label>
                <Field
                  className={
                    errors.username && touched.username
                      ? "btn error-input"
                      : "btn"
                  }
                  type="text"
                  name="username"
                  id="username"
                  placeholder={`${text.Login.inputUser}...`}
                />
                <ErrorMessage
                  name="username"
                  className="error-text"
                  component="p"
                ></ErrorMessage>
              </div>
              <div>
                <label htmlFor="password">{text.Login.inputPassword}</label>
                <Field
                  className={
                    errors.username && touched.username
                      ? "btn error-input"
                      : "btn"
                  }
                  type="password"
                  id="password"
                  name="password"
                  placeholder={`${text.Login.inputPassword}...`}
                />
                <ErrorMessage
                  name="password"
                  className="error-text"
                  component="p"
                ></ErrorMessage>
              </div>
              <div>
                <input
                  className="btn btn-2"
                  type="submit"
                  value={text.Login.inputSubmit}
                />
              </div>
              {error && <p className="error-text">{text.Login.error}</p>}
            </Form>
          )}
        </Formik>
        <Link className="register" to="/register">
          {text.Login.register}
        </Link>
      </div>
    </Styles>
  );
};

export default Login;
