import { styles } from './styles';

const Song = ({ currentSong }) => {
	const classes = styles();
	return (
		<div className={classes.songContainer}>
			<img src={currentSong.cover} alt={currentSong.name} />
			<h2>{currentSong.name}</h2>
			<h3>{currentSong.artist}</h3>
		</div>
	);
};

export default Song;
