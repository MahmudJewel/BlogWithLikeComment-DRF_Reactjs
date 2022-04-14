import './App.css';
import Navigation from "./components/Navigations";
import Register from "./components/Register";
import Login from './components/Login';
import Logout from './components/Logout';
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="app">
          <div className="row nav-fixed-top">
            <Navigation />
          </div>
          <Container className="">
            <Routes>
              <Route path="/" element={<Register />} />
              <Route path="/signup" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              {/* <Route path="/movies" element={<Movies />} />
              <Route path="/series" element={<Series />} />
              <Route path="/search" element={<Search />} /> */}
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
