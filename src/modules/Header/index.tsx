import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

import useUser from 'library/hooks/useUser';

import { openAuthModal } from 'library/reducers/modalReducer';
import { logout } from 'library/reducers/usersReducer';
import { useAppDispatch } from 'library/hooks/reduxTypedHooks';

const Header: FC = () => {
	const dispatch = useAppDispatch();
	const user = useUser();
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
					{!user.user.id && !user.token ? (
						<Button onClick={() => dispatch(openAuthModal())} variant="primary">
							Login
						</Button>
					) : (
						<Button onClick={() => dispatch(logout())} variant="primary">
							Logout
						</Button>
					)}
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;
