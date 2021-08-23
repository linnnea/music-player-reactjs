import { styles } from './styles';

const Song = () => {
	const classes = styles();
	return (
		<div className={classes.songContainer}>
			<h1>Picture</h1>
			<h1>Song Name</h1>
			<h1>Artist</h1>
		</div>
	);
};

export default Song;
