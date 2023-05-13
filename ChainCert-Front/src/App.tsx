import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/loginForm/loginForm';

const PlaceholderComponent = () => {
  // Implement the component later
  return <div>Loading...</div>;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PlaceholderComponent />} />
          <Route path='/login' element={<Login />} />
          <Route path='/user' element={<PlaceholderComponent />} />
          <Route path='/form' element={<PlaceholderComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
