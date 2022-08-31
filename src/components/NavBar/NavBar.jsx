import React from 'react';
import { useState, useEffect } from 'react';

import { styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import CropFreeIcon from '@mui/icons-material/CropFree';
import MenuIcon from '@mui/icons-material/Menu';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ShareIcon from '@mui/icons-material/Share';
import PersonIcon from '@mui/icons-material/Person';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import InfoIcon from '@mui/icons-material/Info';

const StyledAppBar = styled(AppBar)({
	backgroundColor: '#000',
	color: '#fff',
});

const StyledIconButton = styled(IconButton)({
	'&:hover': {
		opacity: '0.5',
	},
});

const StyledButton = styled(Button)({
	borderRadius: '8px',
	border: 'none',
	padding: '5px 16px',
	background: 'hsla(0,0%,100%,.25)',
	transition: 'all .3s ease',
	'&:hover': {
		opacity: '0.5',
		borderRadius: '8px',
		border: 'none',
		padding: '5px 16px',
		background: 'hsla(0,0%,100%,.25)',
	},
});

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	[theme.breakpoints.down('sm')]: {
		justifyContent: 'flex-end',
	},
}));

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
	width: 62,
	height: 34,
	padding: 7,
	'& .MuiSwitch-switchBase': {
		margin: 1,
		padding: 0,
		transform: 'translateX(6px)',
		'&.Mui-checked': {
			color: '#fff',
			transform: 'translateX(22px)',
			'& .MuiSwitch-thumb:before': {
				backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
					'#fff'
				)}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
			},
			'& + .MuiSwitch-track': {
				opacity: 1,
				backgroundColor:
					theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
			},
		},
	},
	'& .MuiSwitch-thumb': {
		backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
		width: 32,
		height: 32,
		'&:before': {
			content: "''",
			position: 'absolute',
			width: '100%',
			height: '100%',
			left: 0,
			top: 0,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
				'#fff'
			)}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
		},
	},
	'& .MuiSwitch-track': {
		opacity: 1,
		backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
		borderRadius: 20 / 2,
	},
}));

const NavBar = () => {
	const [time, setTime] = useState();
	const [open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClose = () => {
		setAnchorEl(null);
		setOpen(false);
	};

	const handleOpen = (event) => {
		setOpen(true);
		setAnchorEl(event.currentTarget);
	};

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<StyledAppBar position='sticky'>
			<StyledToolbar>
				<Typography
					variant='h6'
					component='a'
					href='/'
					sx={{
						flexGrow: 1,
						fontWeight: 600,
						fontSize: '2rem',
						letterSpacing: '1rem',
						color: 'inherit',
						ml: 5,
						mr: 5,
						textDecoration: 'none',
						display: { xs: 'none', sm: 'block' },
					}}
				>
					Lofi
				</Typography>
				<Typography
					color='inherit'
					sx={{
						mr: 2,
						p: '6px',
						border: '1px solid #fff',
						borderRadius: '4px',
						background: 'hsla(0,0%,100%,.15)',
						fontWeight: '500',
					}}
				>
					{time}
				</Typography>
				<MaterialUISwitch sx={{ m: 2 }} defaultChecked />
				<StyledButton
					color='inherit'
					sx={{ mr: 2, display: { xs: 'none', sm: 'block' } }}
				>
					Sign Up
				</StyledButton>
				<StyledIconButton
					size='large'
					color='inherit'
					sx={{ mr: 2, display: { xs: 'none', sm: 'block' } }}
				>
					<ShareIcon />
				</StyledIconButton>
				<StyledIconButton
					size='large'
					color='inherit'
					sx={{ mr: 2, display: { xs: 'none', sm: 'block' } }}
				>
					<VolumeUpIcon />
				</StyledIconButton>
				<StyledIconButton
					size='large'
					color='inherit'
					sx={{ mr: 2, display: { xs: 'none', sm: 'block' } }}
				>
					<CropFreeIcon />
				</StyledIconButton>
				<StyledIconButton
					size='large'
					color='inherit'
					sx={{ mr: 2 }}
					onClick={handleOpen}
				>
					<MenuIcon />
				</StyledIconButton>
			</StyledToolbar>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				disableAutoFocusItem
				PaperProps={{
					style: {
						left: '50%',
						transform: 'translateX(10%) translateY(30%)',
					},
				}}
				MenuListProps={{
					style: {
						padding: 0,
					},
				}}
			>
				<MenuItem>
					<PersonIcon sx={{ mr: 2 }} />
					Login
				</MenuItem>
				<MenuItem>
					<QueueMusicIcon sx={{ mr: 2 }} />
					Playlist
				</MenuItem>
				<MenuItem>
					<ContactSupportIcon sx={{ mr: 2 }} />
					Contact us
				</MenuItem>
				<MenuItem>
					<InfoIcon sx={{ mr: 2 }} />
					About us
				</MenuItem>
			</Menu>
		</StyledAppBar>
	);
};

export default NavBar;
