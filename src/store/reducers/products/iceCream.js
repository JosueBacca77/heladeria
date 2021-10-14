const defaulState = [
    {
        flavor: 'Chocolate',
        stock: 10,
        color:'#6D380E'
    },
    {
        flavor: 'Frutilla',
        stock: 10,
        color:'#DB21E4'
    },
    {
        flavor: 'Limón',
        stock: 10,
        color:'#FBFCE0'
    },
    {
        flavor: 'Vainilla',
        stock: 10,
        color:'#EFF553'
    },
    {
        flavor: 'Dulce de Leche',
        stock: 10,
        color:'#A05807'
    },
    {
        flavor: 'Flan',
        stock: 10,
        color:'#F5EB81'
    },
    {
        flavor: 'Chocolate Suizo',
        stock: 10,
        color:'#8E4E21'
    },
    {
        flavor: 'Banana',
        stock: 10,
        color:'#EAE4B2'
    },
    {
        flavor: 'Crema Rusa',
        stock: 10,
        color:'#EADDF7'
    },
    {
        flavor: 'Cereza',
        stock: 10,
        color:'#F58EE2'
    },
    {
        flavor: 'Mantecol',
        stock: 10,
        color:'#F3E6D8'
    },
    {
        flavor: 'Durazno',
        stock: 10,
        color:'#FECFA2'
    },
    {
        flavor: 'Ananá',
        stock: 10,
        color:'#EEDAC6'
    },
    {
        flavor: 'Menta Granizada',
        stock: 10,
        color:'#23A929'
    },
    {
        flavor: 'Banana Split',
        stock: 10,
        color:'#E4BF4D'
    },
    {
        flavor: 'Crema Americana',
        stock: 10,
        color:'#F3F3E6'
    },
    {
        flavor: 'Selva Negra',
        stock: 10,
        color:'#452504'
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
