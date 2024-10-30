import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

import AddDevice from './pages/AddDevice';
import EditDevice from './pages/EditTDevice';
import ViewDevice from './pages/ViewDevice';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/adddevice" element={<AddDevice />} />
          <Route path="/editdevice/:id" element={<EditDevice />} />
          <Route path="/viewdevice/:id" element={<ViewDevice />} />
          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
