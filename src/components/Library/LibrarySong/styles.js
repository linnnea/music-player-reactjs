import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
	librarySong: {
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
		transition: 'all 0.3s ease',
		borderBottom: [[1, 'solid', '#181818']],

		'& img': { width: '20%' },
		'&:hover': { background: 'rgba(0, 0, 0, 0.85) !important', color: '#fff' },
	},
	songDescription: {
		paddingLeft: '1.5rem',

		'& h3': {
			fontSize: '0.9rem',
			paddingBottom: '0.5rem',
		},
		'& h4': { fontSize: '0.65rem' },
	},
});
