import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
	equalizer: {
		position: 'absolute',
		right: 5,
	},
	eqBar: { transform: 'scale(1, -1) translate(0, -24px)' },
	eqBar1: {
		animationName: `$shortEq`,
		animationDuration: '0.5s',
		animationIterationCount: 'infinite',
		animationDelay: '0s',
	},
	eqBar2: {
		animationName: `$tallEq`,
		animationDuration: '0.5s',
		animationIterationCount: 'infinite',
		animationDelay: '0.17s',
	},
	eqBar3: {
		animationName: `$shortEq`,
		animationDuration: '0.5s',
		animationIterationCount: 'infinite',
		animationDelay: '0.34s',
	},
	'@keyframes shortEq': {
		'0%': { height: 8 },
		'50%': { height: 4 },
		'100%': { height: 8 },
	},
	'@keyframes tallEq': {
		'0%': { height: 16 },
		'50%': { height: 6 },
		'100%': { height: 16 },
	},
});
