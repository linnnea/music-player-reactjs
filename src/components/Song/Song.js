import { styles } from './styles';
import FlyingHead from '../FlyingHead/FlyingHead';

const Song = ({ currentSong, isPlaying }) => {
	const classes = styles();
	return (
		<div className={classes.songContainer}>
			{/* <img src={coverImg} alt={currentSong.name} /> */}
			<FlyingHead currentSong={currentSong} isPlaying={isPlaying} />
			<div className={classes.songInfo}>
				<h2>{currentSong.name}</h2>
				<h3>{currentSong.artist}</h3>
			</div>
		</div>
	);
};

export default Song;
