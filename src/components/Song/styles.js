import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
	songContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		minHeight: '60vh',
		width: '90%',
		textTransform: 'uppercase',
		margin: [[20, 'auto', 0, 'auto']],

		'@media only screen and (min-height: 650px)': {
			margin: [[30, 'auto', 0, 'auto']],
		},
		'@media only screen and (min-width: 1024px)': {
			margin: [['5%', 'auto', 0, 'auto']],
		},

		' & img': {
			display: 'flex',
			flexDirection: 'column',
			alignSelf: 'center',
			width: '100%',
			height: '40vh',
			borderRadius: [['100em', '100em', 0, 0]],
			'@media only screen and (min-height: 650px)': { height: '57vh' },
			'@media only screen and (min-width: 800px)': { maxWidth: '70%' },
		},
		'& h2': {
			fontSize: '1rem',
			padding: [['2rem', 0, '0.7rem', 0]],
		},
		'& h3': {
			fontSize: '0.65rem',
			marginBottom: '2rem',
		},
	},
	songInfo: {
		display: 'flex',
		flexDirection: 'column',

		'@media only screen and (min-width: 800px)': {
			width: '70%',
			margin: [[0, 'auto']],
		},
		'@media only screen and (min-width: 1024px)': { display: 'none' },
	},
});
