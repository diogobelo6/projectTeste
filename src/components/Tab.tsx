import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Box, Divider, Grid, Paper, Tab, Tabs } from '@mui/material';
import React from 'react';
import { HomePage } from './home';
import { Token } from './token';
import { Operations } from './operations';



export const TabBar = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    interface TabContentProps {
        label: number;
        component: React.ReactNode;
      }
      const TabContent: React.FC<TabContentProps> = ({ label, component }) =>
    value === label ? <div>{component}</div> : null;

    const tabContents: TabContentProps[] = [
    { label: 1, component: <HomePage/> },
    { label: 2, component: <Token/> },
    { label: 3, component: <Operations/> },
  ];
    return (
            <AppBar position='fixed' color='transparent' sx={{ top:'54px' }}>
                    <Tabs
                        textColor="primary"
                        indicatorColor="primary"
                        aria-label="secondary tabs example"
                        value={value} 
                        onChange={handleChange}
                        centered
                    >
                        {tabContents.map((tab) => (
            <Tab key={tab.label} value={tab.label} label={`Item ${tab.label}`} />
          ))}
                        
                    </Tabs>
                    <Grid item xs={6} md={10} marginTop={'100px'}>
                <Paper  >
                
                {tabContents.map((tab) => (
                <TabContent key={tab.label} label={tab.label} component={tab.component} />
             ))}
                </Paper>
            
                </Grid>
            </AppBar>
    )
}