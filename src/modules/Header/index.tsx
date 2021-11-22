import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

import { openAuthModal } from 'library/reducers/modalReducer';
import { useAppDispatch } from 'library/hooks/reduxTypedHooks';

const Header: FC = () => {
	const dispatch = useAppDispatch();
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
					<Button onClick={() => dispatch(openAuthModal())} variant="primary">
						Login
					</Button>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;
