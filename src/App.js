import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';

function App() {
  return (
    <div>
      <Toaster position="top-center" toastOptions={{ duration: 3000, }} />
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/resume' element={<Resume></Resume>}></Route>
          <Route path='/about' element={<About></About>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
