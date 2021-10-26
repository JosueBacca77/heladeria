import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        left: '2vw',
        bottom: '4vw',
        zIndex: 1,
        display:'flex',
        alignItems:'center'
    },
    number:{
        color: green[700],
        fontSize:'40px'
    }
}));

const Cash =({cash})=>{

    const classes = useStyles()

    return(
        <article className={classes.root} >
            <AttachMoneyIcon sx={{ color: green[700], width:'40px', height:'40px' }} />
            <span className={classes.number}>{cash}</span>
        </article>
    )
}

export default Cash