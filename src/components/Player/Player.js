import { styles } from './styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const Player = () => {
	const classes = styles();
	return (
		<div className={classes.player}>
			<div className={classes.timeControl}>
				<p>Start Time</p>
				<input type="range" />
				<p>End time</p>
			</div>
			<div className={classes.playControls}>
				<KeyboardArrowLeftIcon
					className={`${classes.icon} ${classes.skipBack}`}
				/>
				<PlayArrowIcon className={`${classes.icon} ${classes.play}`} />
				<KeyboardArrowRightIcon
					className={`${classes.icon} ${classes.skipForward}`}
				/>
			</div>
		</div>
	);
};

export default Player;
