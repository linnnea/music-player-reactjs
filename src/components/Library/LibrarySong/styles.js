import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
	librarySong: {
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
		transition: 'all 0.3s ease',
		margin: '3px auto',
		maxWidth: '22em',

		'& img': { width: '15%', borderRadius: '50%' },
		'&:hover': {
			backgroundColor: 'rgba(255, 255, 255, 0.5)',
			color: '#000',
			borderRadius: '0.5em',
		},
	},
	songDescription: {
		display: 'flex',

		'& h3': { fontSize: '0.9rem', whiteSpace: 'nowrap' },
		'& :nth-child(2)': { marginLeft: 30 },
		'& *': { padding: '0.2rem 0' },
	},
	playStatus: {
		position: 'absolute',
		right: 5,
	},
});
