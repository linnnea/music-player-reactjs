import { styles } from './styles';

const LibrarySong = ({
	song,
	songs,
	setCurrentSong,
	id,
	currentSong,
	setSongs,
	customStyles,
}) => {
	const classes = styles(customStyles);

	const selectSongHandler = () => {
		setCurrentSong(song);

		const newSongs = songs.map((targetSong) => {
			return {
				...targetSong,
				active: targetSong.id === song.id,
			};
		});

		setSongs(newSongs);
	};

	return (
		<div
			onClick={selectSongHandler}
			className={classes.librarySong}
			style={
				song.id === currentSong.id
					? { backgroundColor: 'rgba(152, 255, 176, 0.6)' }
					: { backgroundColor: '' }
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
