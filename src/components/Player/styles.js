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
		alignItems: 'center',
		width: '90%',

		'& input': {
			width: '100%',
			padding: [['1rem', 0]],
			'-webkitAppearance': 'none',
			background: 'transparent',
			cursor: 'pointer',
		},
		'& p': {
			padding: [['1rem']],
		},
		'@media only screen and (min-width: 768px)': {
			width: '50%',
		},
	},
	track: {
		position: 'relative',
		background: 'lightblue',
		width: '100%',
		height: '1rem',
		borderRadius: '1rem',
		overflow: 'hidden',
	},
	animateTrack: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		background: 'rgb(204,204,204)',
		transform: 'translateX(0%)',
		pointerEvents: 'none',
	},
	playControls: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '60%',
		padding: [['1rem']],

		'@media only screen and (min-width: 768px)': {
			width: '30%',
		},
	},
	icon: {
		cursor: 'pointer',
	},
	'input[type="range"]': {
		'&:focus': {
			outline: 'none',
		},
	},
});
