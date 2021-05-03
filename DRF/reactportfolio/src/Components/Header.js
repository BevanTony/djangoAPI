import React from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette:{
        primary:{
            main:'#00bcd4',
            light:'#62efff',
            dark:'#008ba3',
        },
        secondary:{
            main:'#b2ff59',
            light:'#e7ff8c',
            darK:'#7ecb20',
        },

    }
})

const useStyles = makeStyles((theme)=> ({
    menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
}))

function Header(){
    const classes = useStyles()
    
    return(
        <div>
        <ThemeProvider theme={theme}>
        <AppBar color='primary' position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <DragHandleIcon />
                </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Babantoto
                    </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        </ThemeProvider>
        </div>
    )
}

export default Header