import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Welcome from './pages/Welcome';
import UpdateDetails from './pages/UpdateDetails';

export const valueContext = createContext();
function App() {
  const [dataValue, setDataValue] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    picture: null,
  });
  return (
    <>
    <valueContext.Provider value={{dataValue, setDataValue}}>
      <BrowserRouter>
        <Navbar />
        <div className="page">
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} >
              <Route index path="/dashboard/home" element={<Welcome/>}/>
              <Route index path="/dashboard/updateDetail" element={<UpdateDetails/>}/>
            </Route>
            <Route path="/*" element={<h1>Page not found</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
      </valueContext.Provider>
    </>
  );
}

export default App;
