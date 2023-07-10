import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { BottomNavigation, Box, Divider, Grid, Paper, Tab, Tabs } from '@mui/material';
import React from 'react';
import { HomePage } from './home';
import { Token } from './token';
import { Operations } from './operations';



export const TabBar = () => {
    const [value, setValue] = React.useState('Home');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
    interface TabContentProps {
        label: string;
        component: React.ReactNode;
      }
      const TabContent: React.FC<TabContentProps> = ({ label, component }) =>
    value === label ? <div>{component}</div> : null;

    const tabContents: TabContentProps[] = [
    { label: 'Home', component: <HomePage/> },
    { label: 'Operations', component: <Operations/> },
    { label: 'Wallet Info', component: <Token/> },
  ];
    return (
            <AppBar position='fixed' color='transparent' sx={{ top:'64px' }}>
                    <Tabs
                        textColor="inherit"
                        indicatorColor="primary"
                        
                        aria-label="secondary tabs example"
                        value={value} 
                        onChange={handleChange}
                        centered
                    >
                        {tabContents.map((tab) => (
            <Tab key={tab.label} value={tab.label} label={`${tab.label}`} />
          ))}
                        
                    </Tabs>
                    <Grid  padding={'25px'} minHeight={'82vh'} overflow={'auto'} >
                
                
                {tabContents.map((tab) => (
                <TabContent key={tab.label} label={tab.label} component={tab.component} />
             ))}
                
                </Grid>
                <BottomNavigation sx={{backgroundColor:'#1f2128'}}> 
                <Typography fontSize={16}> Copyright © 2023 DApp.ME</Typography>
                
                </BottomNavigation>
            </AppBar>
    )
}