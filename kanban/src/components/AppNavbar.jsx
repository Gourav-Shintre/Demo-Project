import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AppNavbar() {
  const navigate = useNavigate()
  return (
    <Navbar bg="success" expand="lg" className="py-2 px-4">
     
        {/* Left-aligned Brand Text */}
        <Navbar.Brand href="/" className="text-white fw-bold">Kanban</Navbar.Brand>

        {/* Toggler for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Right-aligned Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={()=>{
              navigate('/dashboard')
            }}  className="text-white">Overview</Nav.Link>
            <Nav.Link onClick={()=>{
              navigate('/tasks')
            }}  className="text-white">Task Manager</Nav.Link>
            <Nav.Link onClick={()=>{
               navigate('/')
            }}  className="text-white">Log Off</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
}

export default AppNavbar;
