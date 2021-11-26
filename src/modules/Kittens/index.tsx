import { Container, Col, Row } from 'react-bootstrap';
import useModulePermissions from 'library/hooks/common/useModulePermissions';
import useModuleSettings from 'library/hooks/common/useModuleSettings';

const Kittens = () => {
	const permissions = useModulePermissions();
	const settings = useModuleSettings();

	console.log(permissions);
	console.log(settings);

	return (
		<Container className="d-flex flex-grow-1 flex-column">
			<Row>
				<Col>Kittens component</Col>
			</Row>
		</Container>
	);
};

export default Kittens;
