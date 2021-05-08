import React from 'react'
import Tower from '../Images/Testing.jpg'
import {makeStyles} from '@material-ui/core/styles'
import { IconButton, Typography } from '@material-ui/core'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    background:{
        backgroundImage:`url(${Tower})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height:'100vh',
        width:'100%',
    },
    heroContainer:{
        display:'flex',
        fontFamily:'Heebo sans-serif !important' ,
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center',
        height:'80vh'
    },

    arrowDown:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },

    skillsBackground:{
        backgroundColor:'#888888',
    },

    skillsContainer:{
        display:'flex',
        justifyContent:'center',
        margin:10,
        // alignItems:'center',
        height:'50vh',

    },

    textColor:{
        color:'#ebdddd'
    },

}))

function Landing(props){
    
    
    const classes = useStyles()

    return(
        <>
        <div className={classes.background}>
            <div className={classes.heroContainer}>
                <Typography variant='h3'>
                    Bevan <span className={classes.textColor}>Tony</span> Medrano <br/>
                    <Typography variant='h4'>
                    Web Developer
                    </Typography>
                </Typography>
            </div>

            <div className={classes.arrowDown}>
                <IconButton size='medium' color='secondary'>
                    <ExpandMoreIcon fontSize='large'/>
                </IconButton>
            </div>
        </div>

        <Skills/>
        </>
    )
}

function Skills(props){

    const classes = useStyles()

    return(
        <>
        <div className={classes.skillsBackground}>
            <div className={classes.skillsContainer}>
                <Typography variant='h3'>
                    Skills
                </Typography>
            </div>
        </div>
        </>
    )
}

export default Landing