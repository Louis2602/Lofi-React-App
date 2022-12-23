import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import RightBar from './components/RightBar/RightBar';
import Home from './components/Home/Home';
import SignUp from './pages/SignUp';
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const ScrollToTop = () => {
	const { pathName } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathName]);
	return null;
};

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const theme = createTheme({
		palette: {
			mode: darkMode ? 'dark' : 'light',
		},
	});
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div className='app'>
				<BrowserRouter>
					<NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
					<RightBar />
					<ScrollToTop />
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/sign-up' element={<SignUp />}></Route>
					</Routes>
				</BrowserRouter>
			</div>
		</ThemeProvider>
	);
}

export default App;
