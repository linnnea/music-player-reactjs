import { v4 as uuidv4 } from 'uuid';
import Folie from './assets/songs/Folie.mp3';
import Liquide from './assets/songs/Liquide.mp3';
import JoliBebe from './assets/songs/JoliBebe.mp3';

function chillHop() {
	return [
		{
			number: 1,
			name: 'Folie',
			artist: 'Naza',
			audio: `${Folie}`,
			id: uuidv4(),
			active: false,
		},
		{
			number: 2,
			name: 'Liquide',
			artist: 'Naza',
			audio: `${Liquide}`,
			id: uuidv4(),
			active: false,
		},
		{
			number: 3,
			name: 'Jolie bébé',
			artist: 'Naza',
			audio: `${JoliBebe}`,
			id: uuidv4(),
			active: false,
		},
	];
}

export default chillHop;
