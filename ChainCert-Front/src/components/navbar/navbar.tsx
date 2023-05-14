import logo from "../../assets/logo.png";
import './navbar.scss';

const Navbar = () => {

  return (
    <div className='navbarWrapper'>
      <img className="navbarLogo" src={logo}></img>
      <h1 className='navbarLogin'> Login </h1>
    </div >
  );
}

export default Navbar;
