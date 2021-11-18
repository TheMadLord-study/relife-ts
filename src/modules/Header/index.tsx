import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

import Status from './frames/Status';

interface Props {}

const Header: FC = (props: Props) => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Link to="/">
					<Navbar.Brand>Relife</Navbar.Brand>
				</Link>
				<Link to="/test">
					<Button variant="primary">Test</Button>
				</Link>
				<Nav>
					<Status />
					<Link to="/login">
						<Button variant="primary">Login</Button>
					</Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;
