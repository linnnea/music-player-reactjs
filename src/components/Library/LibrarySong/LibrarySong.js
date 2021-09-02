import { styles } from './styles';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const LibrarySong = ({
	song,
	songs,
	setCurrentSong,
	currentSong,
	setSongs,
	customStyles,
	isPlaying,
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
					? { backgroundColor: '#fff', color: '#000', borderRadius: '0.5em' }
					: { backgroundColor: '' }
			}
		>
			<div className={classes.songDescription}>
				<h3>{song.number}</h3>
				<h3>{song.name}</h3>
				{/* <h4>{song.artist}</h4> */}
			</div>
			{isPlaying && song.id === currentSong.id && (
				<EqualizerIcon className={classes.playStatus} />
			)}
		</div>
	);
};

export default LibrarySong;
