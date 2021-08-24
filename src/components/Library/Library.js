import { styles } from './styles';
import LibrarySong from './LibrarySong/LibrarySong';

const Library = ({ currentSong, setCurrentSong, songs }) => {
	const classes = styles();

	return (
		<div className={classes.library}>
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
					/>
				))}
			</div>
		</div>
	);
};

export default Library;
