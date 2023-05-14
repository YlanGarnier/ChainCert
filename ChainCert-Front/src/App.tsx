import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profil from './components/profil/profil.tsx'

const PlaceholderComponent = () => {
  // Implement the component later
  return <div>Loading...</div>;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<PlaceholderComponent />} />
          <Route path='/user' element={<Profil />} />
          <Route path='/form' element={<PlaceholderComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
