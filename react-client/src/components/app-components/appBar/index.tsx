import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { pages } from '../../../App';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';

export default function ApplicationBar() {

    const counter = useAppSelector((state) => state.settings.counter)
    console.log("Header component is subscribed!!!!")
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar key={1} position="static">
                {counter}
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    {pages.map(r => {
                        return (<Typography key={r.path} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link key={r.path} to={r.path}> {r.label} </Link>
                        </Typography>)
                    })}

                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
