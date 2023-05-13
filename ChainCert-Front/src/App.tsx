import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateUser from './Create/CreateUser.tsx'
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
          <Route path='/login' element={<PlaceholderComponent />} />
          <Route path='/user' element={<Profil />} />
          <Route path='/form' element={<PlaceholderComponent />} />
          <Route path='/createUser' element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
