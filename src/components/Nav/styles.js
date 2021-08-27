import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
	nav: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		minHeight: '10vh',

		'& h1': {
			fontSize: '1rem',
		},

		'& button': {
			textTransform: 'uppercase',
			cursor: 'pointer',
			background: '#000',
			border: 'none',
			color: '#fff',
			padding: [[2, 4, 0, 4]],
			fontSize: '1rem',
			transition: 'all 0.3s ease',
			zIndex: 10,
			width: 'auto',

			'&:hover': {
				opacity: 0.5,
			},
		},
	},
});
