import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
	songContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '60vh',

		' & img': {
			width: '60%',
			borderRadius: '50%',
			'@media only screen and (min-width: 768px)': {
				width: '20%',
			},
		},
		'& h2': {
			padding: [['3rem', '1rem', '1rem', '1rem']],
		},
		'& h3': {
			fontSize: '1rem',
		},
	},
});
