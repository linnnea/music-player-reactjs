import { useState } from 'react';
import { useRef } from 'react';
import { styles } from './styles';
import { PlayArrow, SkipNext, SkipPrevious, Pause } from '@material-ui/icons';

const Player = ({
	currentSong,
	setCurrentSong,
	isPlaying,
	setIsPlaying,
	songs,
}) => {
	const classes = styles();

	const audioRef = useRef(null);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
		animationPercentage: 0,
	});

	const autoPlayHandler = () => {
		if (isPlaying) {
			audioRef.current.play();
		}
	};

	const playSongHandler = () => {
		isPlaying ? audioRef.current.pause() : audioRef.current.play();
		setIsPlaying(!isPlaying);
	};

	const updateTimeHandler = (e) => {
		const current = e.target.currentTime;
		const duration = e.target.duration || 0;
		// Calculates animation percentage
		const roundedCurrent = Math.round(current);
		const roundedDuration = Math.round(duration);
		const animation = Math.round((roundedCurrent / roundedDuration) * 100);
		setSongInfo({
			...songInfo,
			currentTime: current,
			duration,
			animationPercentage: animation,
		});
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

	const skipTrackHandler = (direction) => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		setCurrentSong(
			songs[(currentIndex + direction + songs.length) % songs.length]
		);
	};

	// Styles
	const trackAnim = {
		transform: `translateX(${songInfo.animationPercentage}%)`,
	};

	return (
		<div className={classes.player}>
			<div className={classes.timeControl}>
				<div
					className={classes.track}
					style={{
						background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
					}}
				>
					<input
						onChange={dragHandler}
						type="range"
						min={0}
						max={songInfo.duration}
						value={songInfo.currentTime}
					/>
					<div style={trackAnim} className={classes.animateTrack}></div>
				</div>
				<div className={classes.infoContainer}>
					<div className={classes.songInfo}>
						<h2>{currentSong.name}</h2>
						<h3>{currentSong.artist}</h3>
					</div>
					<div className={classes.timeInfo}>
						<p>{getTime(songInfo.currentTime)}</p>
						<p>{getTime(songInfo.duration)}</p>
					</div>
				</div>
			</div>
			<div className={classes.playControls}>
				<SkipPrevious
					onClick={() => skipTrackHandler(-1)}
					className={`${classes.icon} ${classes.skip}`}
				/>
				{isPlaying ? (
					<Pause
						onClick={playSongHandler}
						className={`${classes.icon} ${classes.playPause}`}
					/>
				) : (
					<PlayArrow
						onClick={playSongHandler}
						className={`${classes.icon} ${classes.playPause}`}
					/>
				)}
				<SkipNext
					onClick={() => skipTrackHandler(1)}
					className={`${classes.icon} ${classes.skip}`}
				/>
			</div>

			<audio
				onEnded={() => skipTrackHandler(1)}
				onLoadedData={autoPlayHandler}
				ref={audioRef}
				onTimeUpdate={updateTimeHandler}
				onLoadedMetadata={updateTimeHandler}
				src={currentSong.audio}
			></audio>
		</div>
	);
};

export default Player;
