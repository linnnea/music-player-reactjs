import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
	library: {
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		background: '#fff',
		boxShadow: [[2, 2, 50, 'rgba(204, 204, 204)']],
		overflow: 'scroll',
		transition: 'all 0.5s ease',
		'@media only screen and (min-width: 768px)': {
			width: '20rem',
		},
		'& h2': {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			padding: [[0, '2rem']],
			minHeight: '10vh',
			fontSize: '0.9rem',
		},
	},
	'*': {
		scrollbarWidth: 'thin',
		scrollbarColor: 'rgba(155,155,155, 0.5) transparent',
	},
});
