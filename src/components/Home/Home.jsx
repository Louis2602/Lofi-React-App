import React from 'react';
import { Box, styled, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import lofi_day_gif from '../../assets/lofi_day.gif';
import lofi_night_gif from '../../assets/lofi_night.gif';

const Container = styled(Box)({
	position: 'fixed',
	right: 0,
	bottom: 0,
	minWidth: '100%',
	minHeight: '100%',
});
const Home = () => {
	const theme = useTheme();
	return (
		<Container>
			{theme.palette.mode === 'light' ? (
				<Box>
					<CardMedia
						component='img'
						src={lofi_day_gif}
						sx={{ minHeight: '100vh' }}
					/>
				</Box>
			) : (
				<Box>
					<CardMedia
						component='img'
						src={lofi_night_gif}
						sx={{ minHeight: '100vh' }}
					/>
				</Box>
			)}
			<Box position='absolute' sx={{top: '50%', left: '50%', right: '50%', bottom: '50%'}}>
				Hello
			</Box>
		</Container>
	);
};

export default Home;
