import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
	nav: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		minHeight: '10vh',

		'& button': {
			background: 'transparent',
			cursor: 'pointer',
			border: '2px solid rgb(65,65,65)',
			padding: '0.5rem',
			transition: 'all 0.3s ease',

			'&:hover': {
				background: 'rgb(65,65,65)',
				color: 'white',
			},
		},
	},
});
