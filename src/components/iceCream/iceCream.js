import { makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '20%',
        position: 'fixed',
        right: '2vw',
        bottom: '4vw',
        zIndex: 1,
    },
    cone:{
        width: 0, 
        height: 0, 
        borderLeft: '40px solid transparent',
        borderRight: '40px solid transparent',
        borderTop: '110px solid',
        borderTopColor: yellow[700]
    },
    scoops:{

    },
}));

const IceCream =()=>{

    const classes = useStyles()

    return(
        <article className={classes.root}>
            <section className={classes.cone}></section>
        </article>
    )
}

export default IceCream