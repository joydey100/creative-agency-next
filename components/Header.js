import Link from "next/link";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import logo from "../public/logos/logo.png";
import { logOut } from "../redux/slices/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return (
    <Navbar bg="light" expand="md" className="py-3" fixed="top">
      <Container>
        <Link href="/">
          <Navbar.Brand>
            <img src={logo?.src} alt="logo" className="w-25" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto main-nav d-flex align-items-center main-header-nav">
            <Link href="/"> Home</Link>
            <Link href="/portfolio"> Our Portfolio</Link>
            <Link href="/pricing"> Pricing</Link>
            <Link href="/contact"> Contact Us</Link>
            {auth?.user?.email && <Link href="/dashboard"> Dashboard</Link>}
            {auth?.user?.displayName && (
              <span className="mx-2"> Hi, {auth.user.displayName}</span>
            )}
            {auth?.user?.email ? (
              <Button variant="danger" onClick={() => dispatch(logOut())}>
                {" "}
                Log Out
              </Button>
            ) : (
              <Link href="/login">
                <Button variant="success"> Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
