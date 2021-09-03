import { createUseStyles } from 'react-jss';
import bgImg from '../../assets/images/bg.jpeg';

export const styles = createUseStyles({
	'*': {
		scrollbarWidth: 'thin',
		scrollbarColor: 'rgba(155,155,155, 0.5) transparent',
	},
	library: {
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.85)',
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${bgImg})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		color: '#fff',
		overflow: 'scroll',
		transition: 'all 0.5s ease',
		padding: [[0, '5%']],
	},
	album: {
		display: 'flex',
		justifyContent: 'center',
		margin: [['5em', 'auto', '2em', 'auto']],
		'@media only screen and (min-width: 800px)': {
			flex: 1,
			margin: '2em auto !important',
		},
	},
	albumCover: {
		maxWidth: '100%',
		height: '34vh',
		borderRadius: '2em',
	},
	albumInfo: {
		display: 'flex',
		flexDirection: 'column',
		padding: [[0, '5%']],
		margin: 'auto',
		maxWidth: '23em',
		'& *': { paddingBottom: '0.5rem' },
		'& h2': { fontSize: '3rem' },
		'& h5': { fontWeight: 'lighter', textTransform: 'uppercase' },
		'& :nth-child(3)': {
			borderBottom: '1px solid #fff',
			paddingBottom: '1.7rem',
		},
	},
	librarySongs: {
		margin: [[30, 'auto', 0, 'auto']],
		'& *': { padding: [[1, 6]] },
	},
	sections: {
		'@media only screen and (min-width: 800px)': {
			display: 'flex',
			position: 'relative',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%,-50%)',
			maxWidth: '45em',
		},
	},
	songsContainer: {
		'@media only screen and (min-width: 800px)': {
			flex: 1,
			margin: [['2em', 'auto']],
			width: 300,
		},
	},
});
