import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
          <Route path='/login' element={<PlaceholderComponent />} />
          <Route path='/user' element={<PlaceholderComponent />} />
          <Route path='/form' element={<PlaceholderComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
