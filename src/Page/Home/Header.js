import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar style={{ backgroundColor: "var(--primary-color)" }} expand="lg" >
            <div></div>
            <Container>
                <Navbar.Brand href="/">
                    <img src="https://i.ibb.co/30sgXGk/Logo.png" alt="" className='img-fluid' />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll" className=''>
                    <Nav
                        className="ms-auto  d-flex justify-content-center align-items-center"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/" className='active'>Home</Nav.Link>
                        <Nav.Link href="/">About us</Nav.Link>
                        <Nav.Link href="/">What We Do</Nav.Link>
                        <Nav.Link href="/">Media</Nav.Link>
                        <Nav.Link href="/">Contact</Nav.Link>
                        <Nav.Link href="/">
                            <button className='btn41-43 btn-43'>Donate</button>
                        </Nav.Link>

                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default Header;