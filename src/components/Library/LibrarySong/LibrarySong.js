import { styles } from './styles';

const LibrarySong = ({ song, songs, setCurrentSong, id, currentSong }) => {
	const classes = styles();

	const selectSongHandler = () => {
		setCurrentSong(song);
	};

	return (
		<div
			onClick={selectSongHandler}
			className={
				currentSong.id
					? `${classes.librarySong} ${classes.selected}`
					: `${classes.librarySong}`
			}
		>
			<img src={song.cover} alt={song.name} />
			<div className={classes.songDescription}>
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};

export default LibrarySong;
