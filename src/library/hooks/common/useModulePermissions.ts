import { useLocation } from 'react-router-dom';
import { useAppSelector } from 'library/hooks/common/reduxTypedHooks';
import { selectModules } from 'library/reducers/commonReducer';

const useModulePermissions = () => {
	const modules = useAppSelector(selectModules);
	const location = useLocation();
	const locationRoot = location.pathname.split('/').filter((path) => path)[0];
	const modulePermissions = modules?.find((module) => module.code === locationRoot)?.permissions;

	return {
		view_module: modulePermissions?.indexOf('view_module') !== -1,
		can_sell: modulePermissions?.indexOf('can_sell') !== -1,
		can_buy: modulePermissions?.indexOf('can_buy') !== -1,
		add_module: modulePermissions?.indexOf('add_module') !== -1,
		delete_module: modulePermissions?.indexOf('delete_module') !== -1,
	};
};

export default useModulePermissions;
