import { Routes, Route } from 'react-router-dom';

import { useAppSelector } from 'library/hooks/common/reduxTypedHooks';
import { selectModules, selectModulesLoading } from 'library/reducers/commonReducer';

import Home from 'modules/Home';
import Test from 'modules/Test';
import Loading from 'modules/Loading';
import NotFound from 'modules/NotFound';

import { components } from './dynamicComponents';

const AppRoutes = () => {
	const modules = useAppSelector(selectModules);
	const modulesLoading = useAppSelector(selectModulesLoading);

	console.log(modules);

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/test" element={<Test />} />

			{modules?.map((module) => (
				<Route
					path={`/${module.code}`}
					element={components.find((component) => component.type === module.settings.type)?.component}
					key={module.code}
				/>
			))}
			<Route path="*" element={modulesLoading ? <Loading /> : <NotFound />} />
		</Routes>
	);
};

export default AppRoutes;
