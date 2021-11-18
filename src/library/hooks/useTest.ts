const useTest = () => {
	const test1 = () => console.log('test1');

	const test2 = () => console.log('test2');

	return {
		test1,
		test2,
	};
};

export default useTest;
