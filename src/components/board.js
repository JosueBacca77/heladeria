import { connect } from "react-redux"

function Board(props){
    const { iceCream } = props;
    return(
        <article>
            <h1>HELADOS</h1>
            {
                iceCream.map(product => (
                    <section>
                        <h3>{product.flavor}</h3>
                        <p>{product.price}</p>
                    </section>
                ))
            }
        </article>
    )
}

const mapStateToProps=(state)=>{
    return(
        {
            iceCream: state.iceCream,
            cakeIceCream: state.cakeIceCream 
        }
    )
}

const wrapper = connect(mapStateToProps)
const component = wrapper(Board)

export default component