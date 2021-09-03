import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
	songContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		minHeight: '60vh',
		width: '90%',
		textTransform: 'capitalize',
		margin: [[20, 'auto', 0, 'auto']],
		'@media only screen and (min-height: 700px)': { minHeight: '74vh' },
		'@media only screen and (min-height: 650px)': {
			margin: [[30, 'auto', 0, 'auto']],
		},
		'@media only screen and (min-width: 1024px)': {
			margin: [['1%', 'auto', 0, 'auto']],
		},
		'& h2': {
			fontSize: '3rem',
			padding: [['2rem', 0, '0.7rem', 0]],
			'@media only screen and (max-height: 600px)': {
				fontSize: '2rem',
				padding: 0,
			},
			'@media only screen and (min-height: 800px)': {
				padding: [[0, 0, '0.7rem', 0]],
			},
		},
		'& h3': {
			fontSize: '1.2rem',
			textTransform: 'uppercase',
			'@media only screen and (max-height: 605px)': {
				marginBottom: 0,
			},
			marginBottom: '2rem',
		},
	},
	songInfo: {
		display: 'flex',
		flexDirection: 'column',
		color: '#fff',
		marginTop: '3rem',
		'@media only screen and (min-width: 800px)': { width: '70%' },
		'@media only screen and (min-width: 1024px)': { display: 'none' },
	},
});
