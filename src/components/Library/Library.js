import { styles } from './styles';
import LibrarySong from './LibrarySong/LibrarySong';
import albumCover from '../../assets/images/albumcover.jpg';

const Library = ({
	currentSong,
	setCurrentSong,
	songs,
	setSongs,
	libraryStatus,
	isPlaying,
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
			<div className={classes.sections}>
				<div className={classes.album}>
					<img
						className={classes.albumCover}
						src={albumCover}
						alt="Gros Bébé Album - 2020"
					/>
				</div>

				<div className={classes.songsContainer}>
					<div className={classes.albumInfo}>
						<h5>Album</h5>
						<h2>Gros Bébé</h2>
						<h5>French rap - 2020</h5>
					</div>

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
								isPlaying={isPlaying}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Library;
