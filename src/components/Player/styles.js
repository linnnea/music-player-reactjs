import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
	player: {
		position: 'fixed',
		left: 0,
		right: 0,
		bottom: 10,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		minHeight: '20vh',

		'@media only screen and (min-width: 1024px)': {
			bottom: 0,
			justifyContent: 'flex-end',
			minHeight: '11vh',
		},
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
		'@media only screen and (min-width: 1024px)': {
			width: '100%',
		},
	},
	infoContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%',

		'@media only screen and (min-width: 1024px)': {
			position: 'absolute',
			top: '50%',
			transform: 'translateY(-50%)',
			alignItems: 'center',
			padding: [[0, '5%', '0.4%', '5%']],
		},
	},
	songInfo: {
		display: 'none',
		'@media only screen and (min-width: 1024px)': {
			display: 'flex',
			flexDirection: 'column',
			position: 'absolute',
			top: '50%',
			transform: 'translateY(-50%)',
			paddingTop: 5,

			'& h2': { fontSize: '1.2rem' },
			'& h3': { fontSize: '0.7rem' },
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

			'@media only screen and (min-width: 1024px)': {
				'&:nth-child(2)': {
					color: 'gray',
				},
			},
		},
		'@media only screen and (min-width: 1024px)': {
			position: 'relative',
			bottom: -3,
			justifyContent: 'space-between',
			width: 75,
			marginLeft: 'auto',
		},
	},
	track: {
		position: 'absolute',
		top: 0,
		background: 'lightblue',
		width: '90%',
		height: '0.2rem',
		overflow: 'hidden',

		'@media only screen and (min-width: 1024px)': {
			width: '100%',
		},
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
		width: 200,
		padding: [['1rem']],

		'@media only screen and (min-width: 1024px)': {
			position: 'absolute',
			top: '50%',
			transform: 'translateY(-50%)',
			width: '20%',
			padding: [['0.7rem']],
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
