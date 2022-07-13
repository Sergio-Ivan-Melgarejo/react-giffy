import React from "react";
import { Formik } from "formik";
import register from "services/register";

// context
import { Context } from "context/LanguageContext";

// styles
import { Styles } from "./styled";

const initialValues = {
  username: "",
  password: "",
};

const Register = () => {
  const { text } = React.useContext(Context);

  return (
    <Styles>
      <div className="login-container">
        <h2>{text.Register.title}</h2>

        <Formik
          initialValues={initialValues}
          onSubmit={( values,  ) => {
            return register(values);
          }}
        >
          {({ handleSubmit, handleChange, isSubmitting, errors }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">{text.Login.inputUser}</label>
                <input
                  className="btn"
                  name="username"
                  // value={username}
                  onChange={handleChange}
                  type="text"
                  placeholder={`${text.Login.inputUser}...`}
                  id="username"
                />
              </div>
              <div>
                <label htmlFor="password">{text.Login.inputPassword}</label>
                <input
                  className="btn"
                  name="password"
                  // value={password}
                  onChange={handleChange}
                  type="password"
                  placeholder={`${text.Login.inputPassword}...`}
                  id="password"
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
              {/* {error && <p className="error">{text.Register.error}</p>} */}
            </form>
          )}
        </Formik>
      </div>
    </Styles>
  );
};

export default Register;
