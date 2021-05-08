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

    appbar:{
        background:'none',
    },
    appbarWrapper:{
        width:'80%',
        margin: '0 auto',
        
    },
    appbarTitle:{
        flexGrow:'1',
        fontWeight:700,
        fontFamily:'Nunito',
    },

    colorText:{
        color:'white',
    },
    icon:{
        color: '#fff',
        fontSize: '1rem'
    },

}))

function Header(props){
    const classes = useStyles()

const handleThemeChange = (e, value) =>{
    props.onChange(value)
}

    return(
        <div>
        <AppBar className={classes.appbar}>
            <Toolbar className={classes.appbarWrapper}>
                <IconButton edge="start" className={classes.icon} aria-label="menu">
                <DragHandleIcon />
                </IconButton>
                    <Typography variant='h5' className={classes.appbarTitle}>
                        Baban<span className={classes.colorText}>toto</span>.
                    </Typography>
                <Switch checked={props.darkMode} onChange={handleThemeChange}/>
                <Button variant='contained' color="primary">Login</Button>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Header