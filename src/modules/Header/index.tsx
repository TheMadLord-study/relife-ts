import { Link } from 'react-router-dom';

import { Navbar, Nav, Container, Button } from 'react-bootstrap';

interface Props {}

const Header = (props: Props) => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Link to="/">
					<Navbar.Brand>Relife</Navbar.Brand>
				</Link>
				<Nav>
					<Link to="/login">
						<Button variant="primary">Login</Button>
					</Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;
