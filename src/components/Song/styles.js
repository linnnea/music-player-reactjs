import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
	songContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		minHeight: '60vh',
		textTransform: 'uppercase',

		' & img': {
			display: 'flex',
			flexDirection: 'column',
			alignSelf: 'center',
			// width: '60%',
			borderRadius: [['50%', '50%', 0, 0]],
			'@media only screen and (min-width: 768px)': {
				width: '20%',
			},
		},
		'& h2': {
			fontSize: '1.2rem',
			padding: [['3rem', 0, '1rem', 0]],
		},
		'& h3': {
			fontSize: '0.65rem',
		},
	},
	songInfo: {
		display: 'flex',
		flexDirection: 'column',
		alignSelf: 'center',
		// padding: [[0, '1rem']],
		// width: '90%',
	},
});
