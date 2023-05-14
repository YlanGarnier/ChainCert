import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import './navbar.scss';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='navbarWrapper'>
      <img className="navbarLogo" src={logo}></img>
      <h1 className='navbarLogin' onClick={() => navigate("/login")}> Login </h1>
    </div >
  );
}

export default Navbar;
