import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import LeftNav from '../LeftNav/LeftNav';


const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut =()=>{
    logOut()
    .then(()=>{})
    .catch(error => console.error(error))
  }
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand><Link to='/'>World News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Actions</Nav.Link>
            <NavDropdown className='d-lg-none' title="Categories" id="collasible-nav-dropdown">
              <LeftNav></LeftNav>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">

              {
                user?.uid ?
               <>
                <span>{user?.displayName}</span>
                <Button onClick={handleLogOut} className='mx-2' variant="outline-primary">Logout</Button>
               </>
                :
                <>
                <Button className='mx-2 ' action variant="outline"><Link className='text-dark' to='/login'>Login</Link></Button>
                <Button action variant="outline"><Link className='text-dark' to='/register'>Register</Link></Button>
                </>
              }
              

              </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {
                user?.photoURL?
                <Image style={{height:'25px'}} roundedCircle src={user?.photoURL}></Image>
                :
                <FaUser className='text-dark'></FaUser>
              }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;