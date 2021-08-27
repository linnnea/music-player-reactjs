import { useState } from 'react';
import './App.css';
import Player from './components/Player/Player';
import Song from './components/Song/Song';
import Library from './components/Library/Library';
import Nav from './components/Nav/Nav';

import data from './data';

function App() {
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [libraryStatus, setLibraryStatus] = useState(false);

	return (
		<div className="App" style={libraryStatus ? { marginLeft: '30%' } : {}}>
			<div className="container">
				<Nav
					libraryStatus={libraryStatus}
					setLibraryStatus={setLibraryStatus}
				/>
				<Song currentSong={currentSong} />
				<Player
					isPlaying={isPlaying}
					setIsPlaying={setIsPlaying}
					currentSong={currentSong}
					songs={songs}
					setCurrentSong={setCurrentSong}
					libraryStatus={libraryStatus}
				/>
			</div>
			<Library
				currentSong={currentSong}
				setCurrentSong={setCurrentSong}
				songs={songs}
				setSongs={setSongs}
				libraryStatus={libraryStatus}
			/>
		</div>
	);
}

export default App;
