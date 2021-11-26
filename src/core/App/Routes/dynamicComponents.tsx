import Kittens from 'modules/Kittens';
import Puppies from 'modules/Puppies';
import BattleRobots from 'modules/BattleRobots';

export const components = [
	{
		type: 'kittens',
		component: <Kittens />,
	},
	{
		type: 'puppies',
		component: <Puppies />,
	},
	{
		type: 'battle_robots',
		component: <BattleRobots />,
	},
];
