import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import lofi_day_video from '../../assets/lofi_day.mp4';
import lofi_night_video from '../../assets/lofi_night.mp4';

const Home = () => {
	const theme = useTheme();
	return (
		<Box>
			{theme.palette.mode === 'light' ? (
				<Box>
					<video
						src={lofi_day_video}
						style={{
							width: '100%',
							height: '100%',
						}}
						preload='auto'
						loop
					/>
				</Box>
			) : (
				<Box>
					<video
						src={lofi_night_video}
						style={{
							width: '100%',
							height: '100%',
						}}
						preload='auto'
						loop
					/>
				</Box>
			)}
		</Box>
	);
};

export default Home;
