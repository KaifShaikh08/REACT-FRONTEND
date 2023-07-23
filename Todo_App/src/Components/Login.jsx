import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <section>
        <form>
          <input type="email" placeholder="Enter Your Email" />
          <input type="password" placeholder="Enter Your Password" />
          <button type="submit">Login</button>
          <h4>Or</h4>
          <Link to={"/register"}>SignUp</Link>
        </form>
      </section>
    </div>
  );
};

export default Login;
