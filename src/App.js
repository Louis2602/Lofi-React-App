import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import RightBar from './components/RightBar/RightBar';
import Home from './components/Home/Home';
import SignUp from './pages/SignUp';

const ScrollToTop = () => {
	const { pathName } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathName]);
	return null;
};

function App() {
	return (
		<div className='app'>
			<BrowserRouter>
				<NavBar />
				<RightBar />
				<ScrollToTop />
				<Routes>
					<Route path='/' element={<Home />}></Route>
				</Routes>
				<Routes>
					<Route path='/sign-up' element={<SignUp />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
