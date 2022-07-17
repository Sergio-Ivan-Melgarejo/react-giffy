import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import registerServices from "services/register";

// context
import { Context } from "context/LanguageContext";

// styles
import { Styles } from "./styled";
import { Link } from "react-router-dom";

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

const Register = () => {
  const [register, setRegister] = React.useState(false);
  const { text } = React.useContext(Context);

  return (
    <Styles>
        <div className="login-container">
      {register ? (
        <>
          <h2 >Congratulation! You have been successfully registered!</h2>
          <Link className="btn btn-2" to="/login">Go to login</Link>
        </>
      ) : ( <>
          <h2>{text.Register.title}</h2>
          <Formik
            initialValues={initialValues}
            validate={validateFields}
            onSubmit={(values, { setFieldError }) => {
              return registerServices(values)
                .then((res) => {
                  setRegister(true);
                })
                .catch((err) => {
                  console.log(err)
                  setFieldError("username", "This username is not valid");
                });
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form>
                <div>
                  <label htmlFor="username">{text.Login.inputUser}</label>
                  <Field
                    className={
                      errors.username && touched.username
                        ? "btn error-input"
                        : "btn"
                    }
                    name="username"
                    placeholder={`${text.Login.inputUser}...`}
                    id="username"
                  />
                  <ErrorMessage
                    name="username"
                    component="p"
                    className="error-text"
                  />
                </div>
                <div>
                  <label htmlFor="password">{text.Login.inputPassword}</label>
                  <Field
                    className={
                      errors.password && touched.username
                        ? "btn error-input"
                        : "btn"
                    }
                    name="password"
                    type="password"
                    placeholder={`${text.Login.inputPassword}...`}
                    id="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="error-text"
                  />
                </div>
                <div>
                  <input
                    className="btn btn-2"
                    type="submit"
                    value={text.Login.inputSubmit}
                    disabled={isSubmitting}
                  />
                </div>
              </Form>
            )}
          </Formik>
          <Link className="login" to="/login">
            Do you already have an account?
          </Link></>
      )}
        </div>
    </Styles>
  );
};

export default Register;
