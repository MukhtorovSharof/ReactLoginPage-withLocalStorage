import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();
    props.setAuth(true);
    localStorage.setItem("Email", JSON.stringify(email));
    localStorage.setItem("Password", JSON.stringify(password));
    console.log("Saved in Local Storage");
    navigate("/home");
  }

  return (
    <>
      <div className="container">
        <Form className="col-4 offset-4 mt-5">
          <h3>Ro'yxatdan o'tish</h3>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button
            onClick={handleFormSubmit}
            type="submit"
            className="btn btn-dark btn-lg btn-block w-100 mt-3"
          >
            Ro'yxatdan o'tish
          </button>
          <Link to="/" className="forgot-password text-right">
            Oldin ro'yxatdan o'tganmisiz?
          </Link>
          {/* {flag && (
              <Alert color="primary" variant="danger">
                Maydonni to'ldirish zarur!
              </Alert>
            )} */}
        </Form>
      </div>
    </>
  );
}

export default Register;
