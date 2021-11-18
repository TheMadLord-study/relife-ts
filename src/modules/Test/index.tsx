import { FC } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';

import useTest from 'library/hooks/useTest';

const Test: FC = () => {
	const test = useTest();

	return (
		<Container className="d-flex flex-grow-1 flex-column">
			<Row>
				<Col>Test page</Col>
			</Row>
			<Row>
				<Button variant="primary" onClick={test.test1}>
					Test1
				</Button>
				<Button variant="primary" onClick={test.test2}>
					Test1
				</Button>
			</Row>
		</Container>
	);
};

export default Test;
