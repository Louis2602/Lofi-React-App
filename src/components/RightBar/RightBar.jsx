import React from 'react';

// material ui
import { Box, styled, Stack, Button } from '@mui/material';
// icons
import TuneIcon from '@mui/icons-material/Tune';
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

const StyledBox = styled(Box)(({ theme }) => ({
	backgroundColor: '#333',
	border: 'none',
	borderRadius: '16px',
	width: '60px',
	position: 'fixed',
	top: '40vh',
	right: '16px',
	[theme.breakpoints.down('sm')]: {
		width: 'max-content',
		top: '92%',
		left: '50%',
		transform: 'translateX(-50%)',
	},
}));

const StyledButton = styled(Button)({
	color: '#fff',
	padding: '16px',
	'&:hover': {
		opacity: '0.5',
	},
});
const RightBar = () => {
	return (
		<StyledBox>
			<Stack
				direction='column'
				sx={{ flexDirection: { xs: 'row', sm: 'column' } }}
			>
				<StyledButton>
					<TuneIcon />
				</StyledButton>
				<StyledButton>
					<AutoAwesomeMosaicIcon />
				</StyledButton>
				<StyledButton>
					<ChangeCircleIcon />
				</StyledButton>
				<StyledButton>
					<HomeIcon />
				</StyledButton>
			</Stack>
		</StyledBox>
	);
};

export default RightBar;
