import './App.css';
import Home from './pages/Home';
import AddCourse from './pages/AddCourse';
import Error from './pages/Error';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AddCourse">Add Course</Link>
        </li>
      </ul>
    </nav>
  )
}


function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddCourse" element={<AddCourse />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
