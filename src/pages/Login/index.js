import React from "react";
import { Context } from "context/LanguageContext";

const Login = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(username + " " + password)
    }

    const {text} = React.useContext(Context);
  return (
    <div>
        <h2>{text.Login.title}</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">{text.Login.inputUser}</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder={`${text.Login.inputUser}...`} id="name" />
            </div>
            <div>
                <label htmlFor="name">{text.Login.inputPassword}</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder={`${text.Login.inputPassword}...`} id="name" />
            </div>
            <div>
                <input type="submit" value={text.Login.inputSubmit} />
            </div>
        </form>
    </div>
  )
};

export default Login;
