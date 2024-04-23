import style from "./auth.module.scss";
import loginImage from "../../assets/login.png";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {};
  return (
    <section className={`container ${style.auth}`}>
      <div className={style.img}>
        <img src={loginImage} alt="Login Image" width="400" />
      </div>
      <Card>
        <div className={style.form}>
          <h2>Login</h2>
          <form onSubmit={loginUser}>
            <input
              className=""
              type="text"
              placeholder="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className=""
              type="password"
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="--btn  --btn-primary --btn-block">
              {" "}
              Login
            </button>
          </form>
          <span className={style.register}>
            <p>Don't have an account</p>
            <Link to="/register">Register</Link>
          </span>
        </div>
      </Card>
    </section>
  );
};

export default Login;
