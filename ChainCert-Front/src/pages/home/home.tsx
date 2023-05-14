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
          <h1>Unparalleled Security in Decentralized Credential Sharing and Verification</h1>
          <h3>Our platform is designed with security at its core, utilizing the Tezos blockchain to ensure the highest level of data protection. Transactions containing sensitive information are encrypted using the recipient's public key, granting exclusive access only to the intended receiver. Simultaneously, transactions are signed with the sender's private key, enabling anyone to verify the sender's identity using their public key. This unique combination of encryption and digital signatures empowers users to share their credentials with confidence, knowing that their sensitive data remains private and that the authenticity of the sender is assured.</h3>
        </div>
        <div className={`homeHeadline3 ${isText3Visible ? 'visible' : ''}`}>
          <h1>Elevate Your Professional Profile with Secure, Blockchain-Verified Credentials</h1>
          <h3>Our platform brings together professionals and organizations in a decentralized, secure, and trustworthy environment built on the Tezos blockchain. Users can create their profiles, highlighting their skills, experiences, and verified credentials, while maintaining control over their sensitive data. Organizations can effortlessly discover and connect with talented individuals, confident in the validity of their accomplishments. By promoting trust, transparency, and secure connections, our platform is transforming the way professionals and organizations collaborate and succeed in the digital world.</h3>
        </div>
        <div className="homeHeadlinePlaceHolder">
          <img className="homeHeadlineUpArrowIcon" src={upArrow}></img>
          <h1 className="homeHeadlineLearnMore">Learn More !</h1>
          <img className="homeHeadlineLearnMoreIcon" src={learnMoreIcon}></img>
        </div>
      </div>
      <div className="homeFooterWrapper">
        <h1>Haks 2023</h1>
        <h2>ChainCert is a website created for the 2023 Haks event.</h2>
        <h3>Created by</h3>
        <div className="homeFooterCredits">
          <p>Ylan Garnier</p>
          <p>Lenny Vongphouthone</p>
          <p>Tristan Masselot</p>
          <p>Thibaut Degodenne</p>
          <p>Tom Sancho</p>
        </div>
      </div>
    </div>
  );
}

export default Home
