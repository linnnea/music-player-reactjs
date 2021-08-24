import { styles } from './styles';

const LibrarySong = ({ song }) => {
	const classes = styles();

	return (
		<div className={classes.librarySong}>
			<img src={song.cover} alt={song.name} />
			<div className={classes.songDescription}>
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};

export default LibrarySong;
