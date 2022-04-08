
import './App.css';
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import Candidates from './components/Candidates';
import AboutUs from './components/AboutUs';
import Detail from './components/Detail';



function App() {
  return (
    <div className="App">
           <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
              <Container>
                <Navbar.Brand  as={Link} to={'/'} href="#home">Welcome!</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to={'/'}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to={'/Candidates'}>
                    Candidates
                  </Nav.Link>
                  <Nav.Link as={Link} to={'/AboutUs'}>
                    About Us
                  </Nav.Link>
                </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/Candidates" element={<Candidates />} />
            <Route path="/Candidates/Detail/:id" element={<Detail />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
      
    </div>
  );
}

export default App;
