import { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [text,setText]=useState("کریپتوکامرس")
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <NavLink
          to="/login"
          style={({ isActive }) => {
            return {
              color: isActive ? "#3f51b5" : "black",
              textDecoration: "none",
            };
          }}
        >
          <h1 style={{ display: "flex" }}>login</h1>
        </NavLink>
        <NavLink
          to="/register"
          style={({ isActive }) => {
            return {
              color: isActive ? "#3f51b5" : "black",
              textDecoration: "none",
            };
          }}
        >
          <h1 style={{ display: "flex" }}>register</h1>
        </NavLink>
        <NavLink
          to="/exchange"
          style={({ isActive }) => {
            return {
              color: isActive ? "#3f51b5" : "black",
              textDecoration: "none",
            };
          }}
        >
          <h1>exchange</h1>
        </NavLink>
      </div>
      <Outlet />
      <button onClick={()=>setText("CryptoCommerce")}>{text}</button>
    </div>
  );
};

export default Home;
