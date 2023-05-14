import { useState } from "react";
import blockchainIcon from "../../assets/blockchain.png";
import learnMoreIcon from "../../assets/learnMore.gif";
import secretKeyIcon from "../../assets/privateKey.png";
import linksIcon from "../../assets/professionalLinks.png";
import upArrow from "../../assets/upArrow.gif";
import Navbar from '../../components/navbar/navbar';
import './home.scss';

const Home = () => {
  const [isText1Visible, setText1Visibility] = useState(false);
  const [isText2Visible, setText2Visibility] = useState(false);
  const [isText3Visible, setText3Visibility] = useState(false);

  const handleClick1 = () => {
    setText1Visibility(!isText1Visible);
    setText2Visibility(false);
    setText3Visibility(false);
  };
  const handleClick2 = () => {
    setText2Visibility(!isText2Visible);
    setText1Visibility(false);
    setText3Visibility(false);
  };
  const handleClick3 = () => {
    setText3Visibility(!isText3Visible);
    setText1Visibility(false);
    setText2Visibility(false);
  };

  return (
    <div className='homeWrapper'>
      <Navbar />
      <h1 className="homePrimaryHeadline">Your decentralized credential expert</h1>
      <div className="homeGifWrapper">
        <img className="homeGifs" src={blockchainIcon} onClick={handleClick1}></img>
        <img className="homeGifs" src={secretKeyIcon} onClick={handleClick2}></img>
        <img className="homeGifs" src={linksIcon} onClick={handleClick3}></img>
      </div>
      <div className='homeHeadlinesWrapper'>
        <div className={`homeHeadline1 ${isText1Visible ? 'visible' : ''}`}>
          <h1>Empowering Trust and Transparency in Credential Verification with Blockchain</h1>
          <h3>Our platform leverages the Tezos blockchain to create a secure and decentralized ecosystem for managing credentials, such as diplomas and work experiences. With advanced encryption and privacy-preserving technologies, users can effortlessly share their achievements while maintaining control over their sensitive information.</h3>
        </div>
        <div className={`homeHeadline2 ${isText2Visible ? 'visible' : ''}`}>
          <h1>Elevate Your Professional Profile with Secure, Blockchain-Verified Credentials</h1>
          <h3>Our platform reimagines professional networking by creating a decentralized LinkedIn-like ecosystem on the Tezos blockchain. Users can create their profiles, showcasing their skills, experiences, and verified credentials while maintaining control over their sensitive information. Organizations can easily discover and connect with qualified professionals, confident in the authenticity of their achievements.</h3>
        </div>
        <div className={`homeHeadline3 ${isText3Visible ? 'visible' : ''}`}>
          <h1>Elevate Your Professional Profile with Secure, Blockchain-Verified Credentials</h1>
          <h3>Our platform reimagines professional networking by creating a decentralized LinkedIn-like ecosystem on the Tezos blockchain. Users can create their profiles, showcasing their skills, experiences, and verified credentials while maintaining control over their sensitive information. Organizations can easily discover and connect with qualified professionals, confident in the authenticity of their achievements.</h3>
        </div>
        <div className="homeHeadlinePlaceHolder">
          <img className="homeHeadlineUpArrowIcon" src={upArrow}></img>
          <h1 className="homeHeadlineLearnMore">Learn More !</h1>
          <img className="homeHeadlineLearnMoreIcon" src={learnMoreIcon}></img>
        </div>
      </div>
      <div className="homeFooterWrapper">footer incoming...</div>
    </div>
  );
}

export default Home
