import React, { useState } from 'react';
import {
	Box,
	CardMedia,
	Card,
	CardContent,
	IconButton,
	Typography,
	styled,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import lofi_day_gif from '../../assets/lofi_day.gif';
import lofi_night_gif from '../../assets/lofi_night.gif';
import { SkipPrevious, PlayArrow, SkipNext } from '@mui/icons-material';

const dummy_data = [
	{
		id: 1,
		name: 'Live From Space',
		composer: 'Mac Miller',
		img: 'https://mui.com/static/images/cards/live-from-space.jpg',
	},
	{
		id: 2,
		name: 'Talking to the moon',
		composer: 'Bruno Mars',
		img: 'https://i.scdn.co/image/ab67616d0000b273b485137002f97e849987fb75',
	},
	{
		id: 3,
		name: 'Golden Hour',
		composer: 'JVKE',
		img: 'https://images.genius.com/4a7e5f7d560a25d7435a92f6e66a4bbc.1000x1000x1.jpg',
	},
	{
		id: 4,
		name: 'Shape of you',
		composer: 'Ed Sheeran',
		img: 'https://i1.sndcdn.com/artworks-000201927280-2vsnux-t500x500.jpg',
	},
	{
		id: 5,
		name: 'My heart will go on',
		composer: 'Celine Dion',
		img: 'https://i.ytimg.com/vi/Vph8OM5vsgE/maxresdefault.jpg',
	},
];

const Container = styled(Box)({
	position: 'fixed',
	right: 0,
	bottom: 0,
	minWidth: '100%',
	minHeight: '100%',
});

const Modal = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	position: 'absolute',
	left: '50%',
	top: '50%',
	transform: 'translateX(-50%)',
	[theme.breakpoints.down('xl')]: {
		top: '40%',
	},
}));
const StyledCard = styled(Card)({
	color: 'white',
	display: 'flex',
	justifyContent: 'space-between',
	backgroundColor: 'hsla(0,0%,7%,.9)',
	borderRadius: '16px',
	maxHeight: '60vh',
	maxWidth: '90vw',
	overflowY: 'scroll',
	padding: '24px 40px',
	width: '500px',
	height: '200px',
});
const StyledIconButton = styled(IconButton)({
	color: 'white',
});
const Home = () => {
	const theme = useTheme();
	const [song, setSong] = useState({
		id: dummy_data[0].id,
		name: dummy_data[0].name,
		composer: dummy_data[0].composer,
		img: dummy_data[0].img,
	});
	const handlePrevious = () => {
		if (song.id > 0) {
			setSong({
				id: song.id - 1,
				name: dummy_data[song.id - 1].name,
				composer: dummy_data[song.id - 1].composer,
				img: dummy_data[song.id - 1].img,
			});
		}
	};
	const handleNext = () => {
		if (song.id + 1 <= dummy_data.length) {
			setSong({
				id: song.id + 1,
				name: dummy_data[song.id].name,
				composer: dummy_data[song.id].composer,
				img: dummy_data[song.id].img,
			});
		}
	};
	return (
		<Container>
			{theme.palette.mode === 'light' ? (
				<Box sx={{ position: 'relative' }}>
					<CardMedia
						component='img'
						src={lofi_day_gif}
						sx={{ minHeight: '100vh' }}
					/>
				</Box>
			) : (
				<Box sx={{ position: 'relative' }}>
					<CardMedia
						component='img'
						src={lofi_night_gif}
						sx={{ minHeight: '100vh' }}
					/>
				</Box>
			)}
			<Modal>
				<StyledCard>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							width: '100%',
						}}
					>
						<CardContent sx={{ flex: '1 0 auto' }}>
							<Typography component='div' variant='h5'>
								{song.name}
							</Typography>
							<Typography
								variant='subtitle1'
								color='#aaa'
								component='div'
							>
								{song.composer}
							</Typography>
						</CardContent>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<StyledIconButton
								aria-label='previous'
								onClick={handlePrevious}
							>
								{theme.direction === 'rtl' ? (
									<SkipNext />
								) : (
									<SkipPrevious />
								)}
							</StyledIconButton>
							<StyledIconButton aria-label='play/pause'>
								<PlayArrow sx={{ height: 38, width: 38 }} />
							</StyledIconButton>
							<StyledIconButton
								aria-label='next'
								onClick={handleNext}
							>
								{theme.direction === 'rtl' ? (
									<SkipPrevious />
								) : (
									<SkipNext />
								)}
							</StyledIconButton>
						</Box>
					</Box>
					<CardMedia
						component='img'
						sx={{ width: 151, objectFit: 'fill' }}
						image={song.img}
						alt={song.name}
					/>
				</StyledCard>
			</Modal>
		</Container>
	);
};

export default Home;
