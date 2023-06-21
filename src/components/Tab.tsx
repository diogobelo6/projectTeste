import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Box, Divider, Tab, Tabs } from '@mui/material';
import React from 'react';



export const TabBar = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return (
            <AppBar position='fixed' color='transparent' sx={{ top:'54px' }}>
                    <Tabs
                        textColor="primary"
                        indicatorColor="primary"
                        aria-label="secondary tabs example"
                        value={value} 
                        onChange={handleChange}
                        
                    >
                        <Tab value="home" label="Item One"/>
                        <Tab value="op" label="Item Two" />
                        <Tab value="dashboard" label="Item Three" />
                    </Tabs>
            </AppBar>
    )
}