import React from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Bosh sahifaga Xush kelibsiz!</h1>
      <ul>
        <li><Link to="/teacher" >Teacher Page</Link></li>
        <li><Link to="/pupil" >Pupil Page</Link></li>
      </ul>
      <Outlet/>
    </>
  );
}

export default Home;