import { styles } from './styles';

const LibrarySong = ({ libraryStatus, setLibraryStatus }) => {
	const classes = styles();

	return (
		<nav className={classes.nav}>
			<h1>Lo-Fi Music Player</h1>
			<button onClick={() => setLibraryStatus(!libraryStatus)}>Lib</button>
		</nav>
	);
};

export default LibrarySong;
