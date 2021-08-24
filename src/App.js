import { useState } from 'react';
import './App.css';
import Player from './components/Player/Player';
import Song from './components/Song/Song';
import Library from './components/Library/Library';

import data from './data';

function App() {
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);

	return (
		<div className="App">
			<Song currentSong={currentSong} />
			<Player
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				currentSong={currentSong}
			/>
			<Library
				currentSong={currentSong}
				setCurrentSong={setCurrentSong}
				songs={songs}
			/>
		</div>
	);
}

export default App;
