const defaulState = [
    {
        flavor: 'Chocolate',
        stock: 10,
        price: 12.5
    },
    {
        flavor: 'Straw Berry',
        stock: 10,
        price: 14
    },
]

export default function iceCream(state = defaulState, {type, payload}){
    switch (type) {
        // case 'BUY_CHOCOLATE':
        //     //
        //     break;
        default:
            return state
    }
}
