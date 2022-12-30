import React, { useState, useEffect } from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Button,
	Switch,
	Menu,
	MenuItem,
	Box,
	styled,
} from '@mui/material';
import Logo from '../../assets/GifLogo.gif';
import {
	CropFree,
	VolumeUp,
	Share,
	Person,
	QueueMusic,
	ContactSupport,
	Info,
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
	position: 'fixed',
	backgroundColor: 'transparent',
	backgroundImage: 'none',
	boxShadow: 'none',
	height: '80px',
	zIndex: 1,
	padding: '0 48px',
	color: `${theme.palette.mode === 'dark' ? 'white' : 'black'}`,
	[theme.breakpoints.down('md')]: {
		padding: 0
	}
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
	'&:hover': {
		opacity: '0.5',
	},
	[theme.breakpoints.down('md')]: {
		display: 'none',
		marginRight: 2,
	},
}));

const StyledLink = styled(Link)({
	color: 'inherit',
	textDecoration: 'none',
});

const StyledImg = styled('img')(({ theme }) => ({
	borderStyle: 'none',
	verticalAlign: 'middle',
	cursor: 'pointer',
	height: '100px',
	[theme.breakpoints.down('md')]: {
		display: 'flex',
	},
}));
const StyledButton = styled(Button)(({ theme }) => ({
	margin: '0 1rem',
	borderRadius: '8px',
	padding: '5px 16px',
	background: 'hsla(0,0%,100%,.25)',
	transition: 'all .3s ease',
	'&:hover': {
		opacity: '0.5',
	},
	[theme.breakpoints.down('md')]: {
		display: 'none',
	},
	color: `${theme.palette.mode === 'dark' ? 'white' : 'black'}`,
	border: `${theme.palette.mode === 'dark' ? '1px solid white' : '1px solid black'
		}`,
}));

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-around',
	alignItems: 'center',
	padding: 0
});

const StyledTime = styled(Typography)(({ theme }) => ({
	textAlign: 'center',
	width: '110px',
	height: '40px',
	margin: '1rem',
	padding: '6px',
	borderRadius: '8px',
	background: 'hsla(0,0%,100%,.15)',
	fontWeight: '500',
	[theme.breakpoints.down('md')]: {
		display: 'none',
	},
	color: `${theme.palette.mode === 'dark' ? 'white' : 'black'}`,
	border: `${theme.palette.mode === 'dark' ? '1px solid white' : '1px solid black'
		}`,
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

const NavBar = ({ darkMode, setDarkMode }) => {
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
	const handleChange = () => {
		setDarkMode(!darkMode);
	};
	const [isFullscreen, setIsFullscreen] = useState(false);

	const handleFullscreen = () => {
		setIsFullscreen(Boolean(document.fullscreenElement));
		if (isFullscreen) {
			document.body.requestFullscreen();
		} else {
				document.exitFullscreen();
		}
	}

	return (
		<StyledAppBar>
			<StyledToolbar>
				<Box>
					<StyledLink to='/'>
						<StyledImg src={Logo} alt='' />
					</StyledLink>
				</Box>
				<Box
					display='flex'
					justifyContent='space-around'
					alignItems='center'
				>
					<StyledTime>{time}</StyledTime>
					<MaterialUISwitch
						sx={{ m: 2 }}
						checked={darkMode}
						onChange={handleChange}
					/>
					<StyledButton>
						<StyledLink to='/sign-up'>Sign Up</StyledLink>
					</StyledButton>
					<StyledIconButton size='large' color='inherit'>
						<Share />
					</StyledIconButton>
					<StyledIconButton size='large' color='inherit'>
						<VolumeUp />
					</StyledIconButton>
					<StyledIconButton size='large' color='inherit' onClick={handleFullscreen}>
						<CropFree />
					</StyledIconButton>
					<IconButton
						size='large'
						color='inherit'
						sx={{ mr: 2, '&:hover': { opacity: 0.5 } }}
						onClick={handleOpen}
					>
						<MenuIcon />
					</IconButton>
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
						// MenuListProps={{
						// 	style: {
						// 		padding: 0,
						// 	},
						// }}
					>
						<MenuItem>
							<Person sx={{ mr: 2 }} />
							Login
						</MenuItem>
						<MenuItem>
							<QueueMusic sx={{ mr: 2 }} />
							Playlist
						</MenuItem>
						<MenuItem>
							<ContactSupport sx={{ mr: 2 }} />
							Contact us
						</MenuItem>
						<MenuItem>
							<Info sx={{ mr: 2 }} />
							About us
						</MenuItem>
					</Menu>
				</Box>
			</StyledToolbar>
		</StyledAppBar>
	);
};

export default NavBar;
