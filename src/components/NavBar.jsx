import { NavLink } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'; // Free Dumbbell Icon

function NavBar(){

    return(
        <Navbar bg="primary" data-bs-theme="dark">
            <Navbar.Brand href="/"><FontAwesomeIcon icon={faDumbbell} />&nbsp;Fitness Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto text-center">
                    <Nav.Link as={NavLink} to="/" activeClassName='active'>Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/exercises/" activeClassName='active'>View Sessions</Nav.Link>
                    <Nav.Link as={NavLink} to="/add-exercise/" activeClassName='active'>Add Session</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default NavBar;