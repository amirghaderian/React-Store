import { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const btnHandler=() =>{ 
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }
  // useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);
  const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

  const [post, setPost] = useState(null);

  // if (!post) return null;
  const navigate = useNavigate();
  const [text, setText] = useState("کریپتوکامرس");
  return (
    <div>
      <button onClick={()=>btnHandler}> change</button>
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
      {post}
      <button onClick={() => setText("CryptoCommerce")}>{text}</button>
    </div>
  );
};

export default Home;
