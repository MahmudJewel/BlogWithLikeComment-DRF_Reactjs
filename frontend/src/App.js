import './App.css';
import Navigation from "./components/Navigations";
import Register from "./components/Register";
import Login from './components/Login';
// import Logout from './components/Logout';
import { Home } from './components/Home';
import { BlogWithDetails } from './components/BlogWithDetails';
import { Store } from './store';

import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Provider } from 'react';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
      <BrowserRouter>
        <div className="app">
          <div className="row nav-fixed-top">
            <Navigation />
          </div>
          
          <Container className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Register />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/logout" element={<Logout />} /> */}
              <Route path="/blog/:slug" element={<BlogWithDetails />} />
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
