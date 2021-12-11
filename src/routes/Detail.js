import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() =>{
    if(!location.state) {
      navigate('/');
    }
  }, [location.state, navigate]);

  return location.state ? <span>{location.state.title}</span> : null;
}

export default Detail;