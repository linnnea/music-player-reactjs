import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
	player: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		minHeight: '20vh',
	},
	timeControl: {
		display: 'flex',
		width: '50%',

		'& input': {
			width: '100%',
			padding: [['1rem', '2rem']],
		},
		'& p': {
			padding: [['1rem']],
		},
	},
	playControls: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '30%',
		padding: [['1rem']],
	},
	icon: {
		cursor: 'pointer',
	},
});
