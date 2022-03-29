import React, { Fragment, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Teacher from "./components/Teacher";
import Pupil from "./components/Pupil";

const App = () => {
  const [auth, setAuth] = useState(false);

  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Login setAuth={setAuth} />} />
          <Route exact path="/register" element={<Register setAuth={setAuth} />} />
          <Route
            exact
            path="/"
            element={auth ? <Outlet /> : <Navigate to="/" />}
          >
            <Route exact path="home" element={<Home />} />
            <Route exact path="teacher" element={<Teacher />} />
            <Route exact path="pupil" element={<Pupil />} />
          </Route>
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
