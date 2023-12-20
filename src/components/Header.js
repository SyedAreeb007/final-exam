import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import image from "../assets/images/Mask group.png";

export default function Header() {
    return (
        <>
            <Navbar expand="lg" className="d-flex ms-auto bg-dark text-light">
                <Container fluid  style={{ textAlign: 'center' }}>
                    <Navbar.Brand className={"text-light"} href="#">  <Link to={'/'} style={{ textDecoration: 'none' }}> <img src={image}></img> </Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav text-light" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className="ms-auto"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link> <Link className={"text-white"} to={'/About'} style={{ textDecoration: 'none' }}> Web3Makr </Link> </Nav.Link>
                            <Nav.Link> <Link className={"text-white"} to={'/Contact'} style={{ textDecoration: 'none' }}> White Paper </Link> </Nav.Link>
                            <Nav.Link> <Link className={"text-white"} to={'/SecurityUpdate'} style={{ textDecoration: 'none' }}> Services </Link> </Nav.Link>
                            <Nav.Link> <Link className={"text-white"} to={'/SecurityUpdate'} style={{ textDecoration: 'none' }}> Tool </Link> </Nav.Link>
                            <Nav.Link> <Link className={"text-white"} to={'/SecurityUpdate'} style={{ textDecoration: 'none' }}> Contact US </Link> </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                        <Button variant="outline-primary">Start for free</Button>{' '}
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}






