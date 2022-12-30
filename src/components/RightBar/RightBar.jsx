import React from 'react';
import { Box, Stack, Tooltip, styled } from '@mui/material';
import {
	Tune,
	Home,
	AutoAwesomeMosaic,
	ChangeCircle,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const StyledBox = styled(Box)(({ theme }) => ({
	border: 'none',
	borderRadius: '16px',
	width: 'max-content',
	position: 'fixed',
	top: '40%',
	right: '16px',
	zIndex: '2',
	backdropFilter: 'blur(15px)',
	background: 'rgba(0,0,0,0.8)',
	[theme.breakpoints.down('sm')]: {
		top: '88%',
		left: '50%',
		transform: 'translateX(-50%)',
	},
}));

const StyledLink = styled(Link)({
	textDecoration: 'none',
	color: 'white',
	padding: '16px',
	'&:hover': {
		opacity: '0.5',
		cursor: 'pointer',
	},
});
const RightBar = () => {
	return (
		<StyledBox>
			<Stack
				direction='column'
				sx={{ flexDirection: { xs: 'row', sm: 'column' } }}
			>
				<Tooltip title='Mixer' placement='left'>
					<StyledLink>
						<Tune />
					</StyledLink>
				</Tooltip>
				<Tooltip title='Templates' placement='left'>
					<StyledLink>
						<AutoAwesomeMosaic />
					</StyledLink>
				</Tooltip>
				<Tooltip title='Reset' placement='left'>
					<StyledLink>
						<ChangeCircle />
					</StyledLink>
				</Tooltip>
				<Tooltip title='Home' placement='left'>
					<StyledLink to='/'>
						<Home />
					</StyledLink>
				</Tooltip>
			</Stack>
		</StyledBox>
	);
};

export default RightBar;
