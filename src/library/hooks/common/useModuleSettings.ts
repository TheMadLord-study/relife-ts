import { useLocation } from 'react-router-dom';
import { useAppSelector } from 'library/hooks/common/reduxTypedHooks';
import { selectModules } from 'library/reducers/commonReducer';

const useModuleSettings = () => {
	const modules = useAppSelector(selectModules);
	const location = useLocation();
	const locationRoot = location.pathname.split('/').filter((path) => path)[0];
	const moduleSettings = modules?.find((module) => module.code === locationRoot)?.settings;
	return moduleSettings;
};

export default useModuleSettings;
