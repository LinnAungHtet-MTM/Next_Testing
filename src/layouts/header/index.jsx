import { useState } from 'react';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import LoadingButton from '@mui/lab/LoadingButton';

const settings = ['Profile', 'Change Password', 'Dashboard'];

function notificationsLabel(count) {
  if (count === 0) {
    return 'no notifications';
  }
  if (count > 99) {
    return 'more than 99 notifications';
  }
  return `${count} notifications`;
}

const Header = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [loading, setLoading] = useState(true);
  function handleClick() {
    setLoading(true);
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto' }}>
      <IconButton aria-label={notificationsLabel(100)}>
        <Badge badgeContent={100} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Box sx={{ ml: 2 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              size="small"
              alt="Remy Sharp"
              src="https://minimal-kit-react.vercel.app/assets/images/avatars/avatar_default.jpg"
            />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}>
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <LoadingButton
        size="small"
        onClick={handleClick}
        endIcon={<LogoutIcon />}
        loading={false}
        loadingPosition="end"
        variant="contained"
        sx={{borderRadius: '1.2rem', paddingX: '1rem', backgroundColor: 'text.base'}}>
        <span>Logout</span>
      </LoadingButton>
    </Box>
  );
};

export default Header;
