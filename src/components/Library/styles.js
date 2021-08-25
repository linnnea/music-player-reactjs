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
		// transform: 'translateX(-100%)',
		transition: 'all 0.5s ease',
		// opacity: 0,
	},
	// '.library.active': {
	// 	transform: 'translateX(0%) !important',
	// 	opacity: '1 !important',
	// 	background: 'red',
	// },
	'*': {
		scrollbarWidth: 'thin',
		scrollbarColor: 'rgba(155,155,155, 0.5) transparent',
	},
});
