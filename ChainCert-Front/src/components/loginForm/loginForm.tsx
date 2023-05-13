import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import templeLogo from "../../assets/login/templeWalletLogo.png";
import OneLineText from "../../helpers/textResize/textResize";
import './loginForm.scss';
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

const Login = ({tezos, setBeaconConnection, setPublicToken, wallet, setWallet, setUserAddress}: Props) => {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);

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
        setUserAddress(userAddress);
        // await setup(userAddress);
        setBeaconConnection(true);
      }
    })();
  }, []);
  return (
    <div className='loginWrapper' ref={containerRef1}>
      <OneLineText text="Connect using temple wallet" containerRef={containerRef1} baseFontSize="2.5rem" />
      <img className="loginTempleLogo" src={templeLogo}></img>
      <div className='loginConnect' ref={containerRef2} onClick={connectWallet} >
        <OneLineText text="Continue" containerRef={containerRef2} baseFontSize="2rem" />
      </div>
    </div >
  );
}

export default Login;
