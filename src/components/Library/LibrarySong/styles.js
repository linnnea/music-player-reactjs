import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
	librarySong: {
		display: 'flex',
		alignItems: 'center',
		// padding: [['1rem', '2rem']],
		cursor: 'pointer',
		transition: 'background 0.3s ease',
		borderBottom: [[1, 'solid', '#eee']],

		'& img': {
			width: '20%',
		},
		'&:hover': {
			background: '#eee !important',
		},
	},
	songDescription: {
		paddingLeft: '1.5rem',

		'& h3': {
			fontSize: '0.9rem',
			paddingBottom: '0.5rem',
		},
		'& h4': {
			fontSize: '0.65rem',
		},
	},
});
