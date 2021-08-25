import { styles } from './styles';
import LibrarySong from './LibrarySong/LibrarySong';

const Library = ({
	currentSong,
	setCurrentSong,
	songs,
	setSongs,
	libraryStatus,
}) => {
	const classes = styles();

	return (
		<div
			className={classes.library}
			style={
				libraryStatus
					? { transform: 'translateX(0%)', opacity: 1 }
					: { transform: 'translateX(-100%)', opacity: 0 }
			}
		>
			<h2>Library</h2>
			<div className={classes.librarySongs}>
				{songs.map((song) => (
					<LibrarySong
						song={song}
						songs={songs}
						setCurrentSong={setCurrentSong}
						currentSong={currentSong}
						key={song.id}
						id={song.id}
						setSongs={setSongs}
					/>
				))}
			</div>
		</div>
	);
};

export default Library;
