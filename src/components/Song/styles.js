import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
	songContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '60vh',

		' & img': {
			width: '20%',
			borderRadius: '50%',
		},
		'& h2': {
			padding: [['3rem', '1rem', '1rem', '1rem']],
		},
		'& h3': {
			fontSize: '1rem',
		},
	},
});
