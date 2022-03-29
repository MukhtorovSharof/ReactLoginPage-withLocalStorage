import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);
  const [isReg, setIsReg] = useState(false);

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    props.setAuth(true);
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    let pass = localStorage.getItem("Password").replace(/"/g, "");
    if (mail === emaillog && pass === passwordlog) {
      navigate("/home");
    } else if (mail === emaillog && pass !== passwordlog) {
      setFlag(true);
    } else if (!mail && !pass) {
      setIsReg(true);
    }
  }

  return (
    <div className="container">
      <form className="col-4 offset-4 mt-5">
        <h3>Tizimga kirish</h3>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(event) => setEmaillog(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(event) => setPasswordlog(event.target.value)}
          />
        </div>

        <button
          onClick={handleLogin}
          type="submit"
          className="btn btn-dark btn-lg btn-block w-100 mt-3"
        >
          Tizimga kirish
        </button>

        {flag && (
          <Alert color="primary" variant="warning">
            Qayta urinib ko'ring
          </Alert>
        )}
        {isReg && (
          <Alert color="primary" variant="warning">
            Tizimga kirish uchun ro'yxatdan o'ting!
          </Alert>
        )}
        <Link to="/register">Ro'yxatdan o'tish</Link>
      </form>
    </div>
  );
}

export default Login;
