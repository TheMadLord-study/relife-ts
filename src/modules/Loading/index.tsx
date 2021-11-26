import { FC } from 'react';
import { Container, Col, Row, Spinner } from 'react-bootstrap';

const Loading: FC = () => {
	return (
		<Container className="d-flex flex-grow-1 flex-column">
			<Row className="justify-content-center mb-5 mt-5">
				<Col>Loading...</Col>
			</Row>
			<Row className="justify-content-center">
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			</Row>
		</Container>
	);
};

export default Loading;
