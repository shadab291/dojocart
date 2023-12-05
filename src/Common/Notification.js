import React, { useState } from 'react';
import { useSelector } from 'react-redux'; // Import useSelector from react-redux
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NotificationPanel = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const notifications = useSelector(state => state.cart.notifications); // Fetch notifications from Redux store

  const handleNotificationIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'notification-popover' : undefined;

  return (
    <div className="sm:relative">
      <IconButton
        color="inherit"
        onClick={handleNotificationIconClick}
        aria-describedby={id}
      >
        <NotificationsIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleNotificationClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        className="sm:absolute sm:right-0 sm:mt-12"
      >
        <div className="p-4 sm:p-8 rounded-lg bg-white">
          <Typography variant="h6" align="center" className="mb-4">Notifications</Typography>
          {notifications.map((notification, index) => (
            <Typography key={index}>{notification}</Typography>
          ))}
        </div>
      </Popover>
    </div>
  );
};

export default NotificationPanel;
