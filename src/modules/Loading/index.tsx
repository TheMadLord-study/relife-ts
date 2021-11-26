import { FC } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Loading: FC = () => {
	return (
		<Container className="d-flex flex-grow-1 flex-column">
			<Row>
				<Col>Loading page</Col>
			</Row>
		</Container>
	);
};

export default Loading;
