import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Tabs, Tab, IconButton } from '@mui/material';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
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
        <ViewInArIcon sx={{ mr: 1, color: '#1976d2' }} />
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          AMR Fleet Management
        </Typography>

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Tabs 
            value={selectedTab} 
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab label="Map" />
            <Tab label="Analysis" />
            <Tab label="Dashboard" />
            <Tab label="Order Manager" />
            <Tab label="Handling Units" />
            <Tab label="Log" />
            <Tab label="Settings" />
          </Tabs>
        </Box>

        <Box>
          <IconButton color="inherit"><TranslateIcon /></IconButton>
          <IconButton color="inherit"><NotificationsNoneIcon /></IconButton>
          <IconButton color="inherit"><HelpOutlineIcon /></IconButton>
          <IconButton color="inherit"><SettingsIcon /></IconButton>
          <IconButton color="inherit"><AccountCircleIcon /></IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
