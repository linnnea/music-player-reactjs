import { styles } from './styles';
import logo from '../../assets/images/logo_naza.svg';

const LibrarySong = ({ libraryStatus, setLibraryStatus }) => {
	const classes = styles();

	return (
		<nav className={classes.nav}>
			<img
				style={libraryStatus ? { marginLeft: '-35%' } : {}}
				src={logo}
				alt="Naza, french rapper"
			/>
			<button
				style={
					libraryStatus
						? { marginLeft: '-30%', background: '#fff', color: '#000' }
						: {}
				}
				onClick={() => setLibraryStatus(!libraryStatus)}
			>
				Lib
			</button>
		</nav>
	);
};

export default LibrarySong;
