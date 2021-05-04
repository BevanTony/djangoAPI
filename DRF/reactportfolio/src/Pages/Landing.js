import React from 'react'
import bike_colored from '../Images/bike_colored.jpg'
import bike_blackwhite from '../Images/bike_blackwhite.jpg'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    background:{
        display:'flex',
        justifyContent:'center',
        backgroundRepeat: 'no-repeat',
        position:'relative',
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        backgroundImage: theme.palette.type === 'light' ? `url(${bike_blackwhite})` : `url(${bike_colored})`,
        height:'80vh',
        width:'100vw',
    },

    heroContent:{
        position:'relative',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        color:'#FFFEFE',
        marginBottom: 250
    }
}))

function Landing(){

    const classes = useStyles()

    return(
        <div className={classes.background}>
            <div className={classes.heroContent}>
                
            </div>
        </div>
    )
}
export default Landing