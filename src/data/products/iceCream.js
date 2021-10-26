const defaulState = [
    {
        id:1,
        flavor: 'Chocolate',
        stock: 10,
        color:'#6D380E'
    },
    {
        id:2,
        flavor: 'Frutilla',
        stock: 10,
        color:'#DB21E4'
    },
    {
        id:3,
        flavor: 'Limón',
        stock: 10,
        color:'#FBFCE0'
    },
    {
        id:4,
        flavor: 'Vainilla',
        stock: 10,
        color:'#EFF553'
    },
    {
        id:5,
        flavor: 'Dulce de Leche',
        stock: 10,
        color:'#A05807'
    },
    {
        id:6,
        flavor: 'Flan',
        stock: 10,
        color:'#F5EB81'
    },
    {
        id:7,
        flavor: 'Chocolate Suizo',
        stock: 10,
        color:'#8E4E21'
    },
    {
        id:8,
        flavor: 'Banana',
        stock: 10,
        color:'#EAE4B2'
    },
    {
        id:9,
        flavor: 'Crema Rusa',
        stock: 10,
        color:'#EADDF7'
    },
    {
        id:10,
        flavor: 'Cereza',
        stock: 10,
        color:'#F58EE2'
    },
    {
        id:11,
        flavor: 'Mantecol',
        stock: 10,
        color:'#F3E6D8'
    },
    {
        id:12,
        flavor: 'Durazno',
        stock: 10,
        color:'#FECFA2'
    },
    {
        id:13,
        flavor: 'Ananá',
        stock: 10,
        color:'#EEDAC6'
    },
    {
        id:14,
        flavor: 'Menta Granizada',
        stock: 10,
        color:'#23A929'
    },
    {
        id:15,
        flavor: 'Banana Split',
        stock: 10,
        color:'#E4BF4D'
    },
    {
        id:16,
        flavor: 'Crema Americana',
        stock: 10,
        color:'#F3F3E6'
    },
    {
        id:17,
        flavor: 'Selva Negra',
        stock: 10,
        color:'#452504'
    },
]

export default function iceCream(state = defaulState, {type, payload}){
    switch (type) {
        default:
            return state
    }
}
