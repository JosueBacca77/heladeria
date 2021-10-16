import {  makeStyles } from "@material-ui/core";
import { grey, blue, pink } from 'material-ui-colors';
import './flavor.css'


const useStyles = makeStyles((theme) => ({
    closed:{
        backgroundColor: grey[50],
        margin:'5%',
        border: '1px solid #e0e0e0',
        borderRadius: '3% 3% 12% 12%',
        height:'100px',
        display:'flex',
        justifyContent:'center',
    },
    tagName:{
        backgroundColor: blue[900],
        color: grey[50],
        fontWeight:'bold',
        width:'70%',
        height:'25px',
        textAlign:'center',
        marginTop:'25%',
        fontSize:'2vh'
    },
    opened:{
        backgroundColor: grey[800],
        margin:'5%',
        borderRadius: '3% 3% 12% 12%',
        height:'100px',
        display:'flex',
        justifyContent:'flex-start',
    },
    flavor:{
        backgroundColor: pink[800],
        margin:'5%',
        borderRadius: '3% 3% 12% 12%',
        height:'80%',
        width:'90%'
    }
  }));

const Flavor =({open, product, onChangeHover, putScoop})=>{

    const classes = useStyles();

    return(
        <section className='m'>
        {
            open
            ?
            <article 
                className={classes.opened} 
                onMouseEnter={onChangeHover}
                onMouseLeave={onChangeHover}
                onClick={putScoop}
            >
                <div style={{
                    backgroundColor: product.color,
                    margin:'5%',
                    borderRadius: '3% 3% 12% 12%',
                    height:'80%',
                    width:'90%'
                }}></div>
            </article>
            :
            <article className={classes.closed} 
                onMouseEnter={onChangeHover}
                onMouseLeave={onChangeHover}
            >
                <span className={classes.tagName}>{product.flavor}</span>
            </article>
        }
        </section>
    )
   
}

export default Flavor