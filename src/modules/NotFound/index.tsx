import { FC } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const NotFound: FC = () => {
	return (
		<Container className="d-flex flex-grow-1 flex-column">
			<Row>
				<Col>404 Not found</Col>
			</Row>
		</Container>
	);
};

export default NotFound;
