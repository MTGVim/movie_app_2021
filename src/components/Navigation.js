import { Link } from "react-router-dom";
import './Navigation.css';

const Navigation = () => (
  <div className = "nav">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </div>
);

export default Navigation;