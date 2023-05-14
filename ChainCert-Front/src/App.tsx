import { BeaconWallet } from '@taquito/beacon-wallet';
import { TezosToolkit } from '@taquito/taquito';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/loginForm/loginForm';
import Register from './components/registerForm/registerForm';
import Form from './components/form/form';
import Home from './pages/home/home';

const PlaceholderComponent = () => {
  // Implement the component later
  return <div>Loading...</div>;
};

function App() {
  const [tezos, setTezos] = useState(new TezosToolkit("https://ghostnet.ecadinfra.com"));
  const [publicToken, setPublicToken] = useState<string | null>(null);
  const [wallet, setWallet] = useState<BeaconWallet | null>(null);
  const [beaconConnection, setBeaconConnection] = useState<boolean>(false);
  const [userAddress, setUserAddress] = useState<string | null>(null);
  const [contract, setContract] = useState<any>(undefined);
  const [storage, setStorage] = useState<any>(undefined);

  const contractAddress: string = "KT1GMetr9DAf1n318DxVjdstL8xQpMkqvkGE";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login contractAddress={contractAddress} setContract={setContract} setUserAddress={setUserAddress} wallet={wallet} setWallet={setWallet} setBeaconConnection={setBeaconConnection} setPublicToken={setPublicToken} tezos={tezos} />} />
          <Route path='/register' element={<Register setStorage={setStorage} contract={contract} setContract={setContract} setUserAddress={setUserAddress} contractAddress={contractAddress} wallet={wallet} setWallet={setWallet} setBeaconConnection={setBeaconConnection} setPublicToken={setPublicToken} tezos={tezos} />} />
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<PlaceholderComponent />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
