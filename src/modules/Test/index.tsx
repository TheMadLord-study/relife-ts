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
				<Col sm={2}>
					<Row className="mb-3">
						<Button variant="primary" onClick={test.test1}>
							Test1
						</Button>
					</Row>
					<Row>
						<Button variant="primary" onClick={test.test2}>
							Test1
						</Button>
					</Row>
				</Col>
				<Col sm={10}></Col>
			</Row>
		</Container>
	);
};

export default Test;
