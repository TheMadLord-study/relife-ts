import { Container, Col, Row } from 'react-bootstrap';

import useModulePermissions from 'library/hooks/common/useModulePermissions';
import useModuleSettings from 'library/hooks/common/useModuleSettings';

interface Props {
	title?: string;
}
const Puppies = ({ title }: Props) => {
	const permissions = useModulePermissions();
	const settings = useModuleSettings();

	console.log(permissions);
	console.log(settings);

	return (
		<Container className="d-flex flex-grow-1 flex-column">
			<Row>
				<Col>Puppies component</Col>
			</Row>
		</Container>
	);
};

export default Puppies;
