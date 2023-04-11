import Register from "./components/Register";
import Exchange from "./components/Exchange";
import Login from "./components/Login";
import Home from "./components/Home";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Routers,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Routers>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="exchange" element={<Exchange />} />
      </Route>
    </Routes>
  </Routers>
);
