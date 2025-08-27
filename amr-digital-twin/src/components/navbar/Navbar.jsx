import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Tabs, Tab, IconButton } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const tabStyles = {
    '&:focus': { outline: 'none' },
    '&:hover': {
      backgroundColor: '#f5f5f5',
      borderRadius: '4px',
    },
    minWidth: 'auto',
    padding: '6px 16px',
  };

  const iconButtonStyles = {
    '&:focus': { outline: 'none' },
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  };

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: 'white', 
        color: 'black',
        borderBottom: '1px solid #e0e0e0' 
      }}
      elevation={0}
    >
      <Toolbar>
        <Box 
          component="img"
          sx={{ height: 22, mr: 1, cursor: 'pointer' }}
          alt="WEG Logo"
          src="/weg.png"
        />
        <Typography variant="h6" component="div" sx={{ fontWeight: 'regular', color: '#0864ac' }}>
          | WMR Fleet Management
        </Typography>

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Tabs 
            value={selectedTab} 
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab label="Map" sx={tabStyles} />
            <Tab label="Analysis" sx={tabStyles} />
            <Tab label="Dashboard" sx={tabStyles} />
            <Tab label="Order Manager" sx={tabStyles} />
            <Tab label="Handling Units" sx={tabStyles} />
            <Tab label="Log" sx={tabStyles} />
            <Tab label="Settings" sx={tabStyles} />
          </Tabs>
        </Box>

        <Box>
          <IconButton color="inherit" sx={iconButtonStyles}><TranslateIcon /></IconButton>
          <IconButton color="inherit" sx={iconButtonStyles}><NotificationsNoneIcon /></IconButton>
          <IconButton color="inherit" sx={iconButtonStyles}><HelpOutlineIcon /></IconButton>
          <IconButton color="inherit" sx={iconButtonStyles}><SettingsIcon /></IconButton>
          <IconButton color="inherit" sx={iconButtonStyles}><AccountCircleIcon /></IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
