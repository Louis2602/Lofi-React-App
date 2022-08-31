import { Box } from '@mui/material';

import NavBar from './components/NavBar/NavBar';
import RightBar from './components/RightBar/RightBar';
import MainPage from './components/MainPage/MainPage';

import './App.css';

function App() {
	return (
		<Box>
			<NavBar />
			<MainPage />
			<RightBar />
		</Box>
	);
}

export default App;
