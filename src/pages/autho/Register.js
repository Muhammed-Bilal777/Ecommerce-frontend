import style from "./auth.module.scss";
import loginImage from "../../assets/login.png";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
// import { validateEmail } from "../../utils";
import { useDispatch } from "react-redux";
import register from "../../redux/featues/auth/authSlice";

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
  };
  const [formData, setFormData] = useState(initialState);

  const { name, password, email, cpassword } = formData;

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const registerUser = async (e) => {
    e.preventDefault();
    if (!email || !password || !cpassword || !name) {
      return toast.error("All fields are required");
    }
    if (password.length < 8) {
      return toast.error("password must be 8 characters");
    }
    // if (!validateEmail(email)) {
    //   return toast.error("please enter valid email");
    // }
    if (password !== cpassword) {
      return toast.error("confirm password is not matching");
    }

    const userData = {
      name,
      email,
      password,
    };

    await dispatch(register(userData));
  };
  return (
    <section className={`container ${style.auth}`}>
      <Card>
        <div className={style.form}>
          <h2>Register</h2>
          <form onSubmit={registerUser}>
            <input
              className=""
              type="text"
              placeholder="name"
              required
              name="name"
              value={name}
              onChange={handleInputChange}
            />
            <input
              className=""
              type="email"
              placeholder="email"
              required
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <input
              className=""
              type="password"
              placeholder="password"
              required
              value={password}
              name="password"
              onChange={handleInputChange}
            />
            <input
              className=""
              type="password"
              placeholder="confirm password"
              required
              value={cpassword}
              name="cpassword"
              onChange={handleInputChange}
            />
            <button type="submit" className="--btn  --btn-primary --btn-block">
              {" "}
              Login
            </button>
          </form>
          <span className={style.register}>
            <p>Already have an account? </p>
            <Link to="/login">Login</Link>
          </span>
        </div>
      </Card>
      <div className={style.img}>
        <img src={loginImage} alt="Login Image" width="400" />
      </div>
    </section>
  );
};

export default Register;
