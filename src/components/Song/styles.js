import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
	songContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		minHeight: '60vh',
		width: '90%',
		textTransform: 'uppercase',
		margin: [[20, 'auto', 0, 'auto']],

		' & img': {
			display: 'flex',
			flexDirection: 'column',
			alignSelf: 'center',
			width: '100%',
			height: '13em',
			borderRadius: [['12em', '12em', 0, 0]],
			objectFit: 'cover',
			objectPosition: 'top',
			'@media only screen and (min-width: 768px)': {
				width: '20%',
			},
		},
		'& h2': {
			fontSize: '1.2rem',
			padding: [['2rem', 0, '0.7rem', 0]],
		},
		'& h3': {
			fontSize: '0.65rem',
			marginBottom: '2rem',
		},
	},
	songInfo: {
		display: 'flex',
		flexDirection: 'column',
		// alignSelf: 'center',
		// padding: [[0, '1rem']],
		// width: '90%',
		// margin: [[0, '5%']],

		'@media only screen and (min-width: 1024px)': {
			display: 'none',
		},
	},
});
