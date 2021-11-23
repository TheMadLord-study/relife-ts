import { useAppSelector } from './reduxTypedHooks';

const useUser = () => {
	const user = useAppSelector((store) => store.users.user);
	const token = localStorage.getItem('token');

	return {
		user,
		token,
	};
};

export default useUser;
