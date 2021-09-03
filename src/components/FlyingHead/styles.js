import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
	FlyingHead: {
		display: 'flex',
		flexDirection: 'column',
		alignSelf: 'center',
		maxWidth: '100%',
		animation: `$swing calc(60 / 10 * 2s) ease-in-out infinite`,
		'@media only screen and (max-height: 799px)': { height: 220 },
		'@media only screen and (min-height: 800px)': { height: 250 },
		'@media only screen and (min-height: 800px) and (min-width: 768px)': {
			height: 400,
		},
	},
	'@keyframes swing': {
		'0%': { transform: 'rotate(-6deg)' },
		'50%': { transform: 'rotate(8deg)' },
		'100%': { transform: 'rotate(-6deg)' },
	},
});
