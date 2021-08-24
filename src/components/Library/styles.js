import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
	library: {
		position: 'fixed',
		top: 0,
		left: 0,
		width: '20rem',
		height: '100%',
		background: '#fff',
		boxShadow: [[2, 2, 50, 'rgba(204, 204, 204)']],
		overflow: 'scroll',
	},
	'& *': {
		scrollbarWidth: 'thin',
		scrollbarColor: 'rgba(155,155,155, 0.5) transparent',
	},
	/* Works on Chrome / Edge / Safari */
	'& *::-webkit-scrollbar': {
		width: 5,
	},
	'& *::-webkit-scrollbar-track': {
		background: 'transparent',
	},
	'& *::-webkit-scrollbar-thumb': {
		backgroundColor: 'rgba(155, 155, 155, 0.7)',
		borderRadius: 20,
		border: 'transparent',
	},
	'& $activeLibrary': {
		transform: 'translateX(0%)',
		opacity: 1,
	},
});
