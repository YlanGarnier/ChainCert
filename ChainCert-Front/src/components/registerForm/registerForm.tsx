import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import templeLogo from "../../assets/login/templeWalletLogo.png";
import OneLineText from "../../helpers/textResize/textResize";
import './registerForm.scss';
import { BeaconWallet } from "@taquito/beacon-wallet";
import { BeaconEvent, NetworkType, defaultEventCallbacks } from "@airgap/beacon-dapp";
import { TezosToolkit } from "@taquito/taquito";

type Props = {
    tezos: TezosToolkit,
    setBeaconConnection: Dispatch<SetStateAction<boolean>>,
    setPublicToken: Dispatch<SetStateAction<string | null>>,
    wallet: BeaconWallet | null
    setWallet: Dispatch<SetStateAction<BeaconWallet | null>>,
    setUserAddress: Dispatch<SetStateAction<string | null>>
}

const Register = ({tezos, setBeaconConnection, setPublicToken, wallet, setWallet, setUserAddress}: Props) => {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [publicKey, setPublicKey] = useState<string | undefined>(undefined);

  const connectWallet = async (): Promise<void> => {
    try {
      await wallet?.requestPermissions({
        network: {
          type: NetworkType.GHOSTNET,
          rpcUrl: "https://ghostnet.ecadinfra.com"
        }
      });
      // const userAddress = await wallet?.getPKH();
      // await setup(userAddress);
      setPublicKey(await wallet?.getPKH());
      setBeaconConnection(true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    (async () => {
      const wallet = new BeaconWallet({
        name: "ChainCert",
        preferredNetwork: NetworkType.GHOSTNET,
        disableDefaultEvents: true,
        eventHandlers: {
          [BeaconEvent.PAIR_INIT]: {
            handler: defaultEventCallbacks.PAIR_INIT
          },
          [BeaconEvent.PAIR_SUCCESS]: {
            handler: data => setPublicToken(data.publicKey)
          }
        }
      });
      tezos.setWalletProvider(wallet);
      setWallet(wallet);
      // checks if wallet was connected before
      const activeAccount = await wallet.client.getActiveAccount();
      if (activeAccount) {
        const userAddress = await wallet.getPKH();
        setPublicKey(userAddress);
        setUserAddress(userAddress);
        // await setup(userAddress);
        setBeaconConnection(true);
      }
    })();
  }, []);

  function onRegister() {
    console.log(username);
  }

  return (
    <div className='registerWrapper' ref={containerRef1}>
      <OneLineText text="Register using temple wallet and choosing an username" containerRef={containerRef1} baseFontSize="2.5rem" />
      {publicKey == null ?
        <div className='loginConnect' ref={containerRef2} onClick={connectWallet} >
          <img className="loginTempleLogo" src={templeLogo}></img>
          <OneLineText text="Connect your wallet" containerRef={containerRef2} baseFontSize="2rem" />
        </div>
      : 
        <div>
          <span className="keyMessage">✅ Your wallet is connected, your public key: </span>
          <span className="publicKey keyMessage">{publicKey}</span>
        </div>
      }
      <div className="form">
        <input placeholder="Write your username" onChange={(data) => setUsername(data.target.value)}/>
        <div className='loginConnect' ref={containerRef2} onClick={onRegister} >
          <OneLineText text="Continue" containerRef={containerRef2} baseFontSize="2rem" />
        </div>
      </div>
      {/* <button onClick={onRegister}>Register</button> */}
    </div >
  );
}

export default Register;
