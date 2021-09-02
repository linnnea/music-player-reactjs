import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
	nav: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		minHeight: '10vh',
		'& *': { margin: [[0, '5%']], fontFamily: 'Monument Regular' },
		'& img': {
			position: 'relative',
			width: 85,
			zIndex: 11,
		},
		'& button': {
			textTransform: 'uppercase',
			cursor: 'pointer',
			background: '#000',
			border: 'none',
			color: '#fff',
			padding: [[3, 4, 0, 4]],
			fontSize: '1.3rem',
			transition: 'all 0.3s ease',
			zIndex: 10,
			width: 'auto',
			'&:hover': { opacity: 0.5 },
		},
	},
});
