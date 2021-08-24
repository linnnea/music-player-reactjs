import { styles } from './styles';
import LibrarySong from './LibrarySong/LibrarySong';

const Library = ({ currentSong, songs }) => {
	const classes = styles();

	return (
		<div className={classes.library}>
			<h2>Library</h2>
			<div className={classes.librarySongs}>
				{songs.map((song) => (
					<LibrarySong song={song} />
				))}
			</div>
		</div>
	);
};

export default Library;
