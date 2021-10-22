const defaultStore = [
    {
        id: 1,
        description: 'Lemon pie',
        stock: 8,
        price: 18
    },
    {
        id: 2,
        description: 'Chocolate frutilla y vainilla',
        stock: 8,
        price: 18
    },
    {
        id: 3,
        description: 'Frutos del bosque',
        stock: 8,
        price: 20
    },

] 

export default function cakeIceCream(state = defaultStore, {type, payload}){
    switch (type) {
        // case 'BUY_CHOCOLATE':
        //     //
        //     break;
        default:
            return state
    }
}
