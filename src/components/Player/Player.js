import { useState } from 'react';
import { useRef } from 'react';
import { styles } from './styles';
import {
	PlayArrow,
	KeyboardArrowLeft,
	KeyboardArrowRight,
	Pause,
} from '@material-ui/icons';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
	const classes = styles();

	const audioRef = useRef(null);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});

	const playSongHandler = () => {
		isPlaying ? audioRef.current.pause() : audioRef.current.play();
		setIsPlaying(!isPlaying);
	};

	const updateTimeHandler = (e) => {
		const current = e.target.currentTime;
		const duration = e.target.duration;
		setSongInfo({ ...songInfo, currentTime: current, duration });
	};

	const getTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		const secondsWithZero = String(seconds).padStart(2, '0');
		return `${minutes}:${secondsWithZero}`;
	};

	const dragHandler = (e) => {
		audioRef.current.currentTime = e.target.value;
		setSongInfo({
			...songInfo,
			currentTime: e.target.value,
		});
	};

	return (
		<div className={classes.player}>
			<div className={classes.timeControl}>
				<p>{getTime(songInfo.currentTime)}</p>
				<input
					onChange={dragHandler}
					type="range"
					min={0}
					max={songInfo.duration}
					value={songInfo.currentTime}
				/>
				<p>{getTime(songInfo.duration)}</p>
			</div>
			<div className={classes.playControls}>
				<KeyboardArrowLeft className={`${classes.icon} ${classes.skipBack}`} />
				{isPlaying ? (
					<Pause
						onClick={playSongHandler}
						className={`${classes.icon} ${classes.pause}`}
					/>
				) : (
					<PlayArrow
						onClick={playSongHandler}
						className={`${classes.icon} ${classes.play}`}
					/>
				)}
				<KeyboardArrowRight
					className={`${classes.icon} ${classes.skipForward}`}
				/>
			</div>

			<audio
				ref={audioRef}
				onTimeUpdate={updateTimeHandler}
				onLoadedMetadata={updateTimeHandler}
				src={currentSong.audio}
			></audio>
		</div>
	);
};

export default Player;
