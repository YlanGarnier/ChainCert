import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home.tsx'
import Profil from './Profil/Profil.tsx'

const PlaceholderComponent = () => {
  // Implement the component later
  return <div>Loading...</div>;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<PlaceholderComponent />} />
          <Route path='/user' element={<Profil />} />
          <Route path='/form' element={<PlaceholderComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
