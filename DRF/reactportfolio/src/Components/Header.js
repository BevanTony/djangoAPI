import React from 'react'
import { makeStyles, } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import { Switch } from '@material-ui/core';

const useStyles = makeStyles((theme)=> ({
    menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
}))

function Header(props){
    const classes = useStyles()

const handleThemeChange = (e, value) =>{
    props.onChange(value)
}

    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <DragHandleIcon />
                </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Babantoto
                    </Typography>
                <Switch checked={props.darkMode} onChange={handleThemeChange}/>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Header