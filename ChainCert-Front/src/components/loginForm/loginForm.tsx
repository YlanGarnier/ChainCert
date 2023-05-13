import { useRef } from "react";
import templeLogo from "../../assets/login/templeWalletLogo.png";
import OneLineText from "../../helpers/textResize/textResize";
import './loginForm.scss';

const Login = () => {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);

  return (
    <div className='loginWrapper' ref={containerRef1}>
      <OneLineText text="Connect using temple wallet" containerRef={containerRef1} baseFontSize="2.5rem" />
      <img className="loginTempleLogo" src={templeLogo}></img>
      <div className='loginConnect' ref={containerRef2}>
        <OneLineText text="Continue" containerRef={containerRef2} baseFontSize="2rem" />
      </div>
    </div >
  );
}

export default Login;
