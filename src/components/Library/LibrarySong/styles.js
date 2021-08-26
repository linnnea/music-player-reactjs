import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
	librarySong: {
		display: 'flex',
		alignItems: 'center',
		padding: [['1rem', '2rem']],
		cursor: 'pointer',
		transition: 'background 0.3s ease',

		'& img': {
			width: '30%',
		},
		'&:hover': {
			background: 'rgba(222,222,222) !important',
		},
	},
	songDescription: {
		paddingLeft: '1rem',

		'& h3': {
			fontSize: '1rem',
		},
		'& h4': {
			fontSize: '0.7rem',
		},
	},
});
