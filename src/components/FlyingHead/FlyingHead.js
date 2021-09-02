import { styles } from './styles';
import coverImg from '../../assets/images/naza.png';

const FlyingHead = ({ currentSong, isPlaying }) => {
	const classes = styles();

	return (
		<>
			<img
				className={classes.FlyingHead}
				style={
					isPlaying ? { display: 'block' } : { animationPlayState: 'paused' }
				}
				src={coverImg}
				alt={currentSong.name}
			/>
		</>
	);
};

export default FlyingHead;
