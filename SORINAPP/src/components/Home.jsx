import { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  const navigate = useNavigate();
  const [text, setText] = useState("کریپتوکامرس");
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
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={() => setText("CryptoCommerce")}>{text}</button>
    </div>
  );
};

export default Home;
