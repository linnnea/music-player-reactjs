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
		flexDirection: 'column',
		alignItems: 'center',
		width: '90%',

		'& input': {
			width: '100%',
			padding: [['1rem', 0]],
			'-webkitAppearance': 'none',
			background: 'transparent',
			cursor: 'pointer',
		},
		'@media only screen and (min-width: 768px)': {
			width: '50%',
		},
	},
	timeInfo: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%',
		fontSize: '0.65rem',
		letterSpacing: 1,
		padding: [['1rem', 0]],

		'& p': {
			'&:nth-child(2)': {
				textAlign: 'right',
			},
		},
	},
	track: {
		position: 'relative',
		background: 'lightblue',
		width: '100%',
		height: '0.2rem',
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
		width: '80%',
		padding: [['1rem']],

		'@media only screen and (min-width: 768px)': {
			width: '50%',
		},
	},
	playPause: {
		width: '38px !important',
		height: '38px !important',
		padding: '0.55rem',
		borderRadius: '50%',
		border: [[1, 'solid', '#000']],
	},
	skip: {
		width: '20px !important',
		height: '20px !important',
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
