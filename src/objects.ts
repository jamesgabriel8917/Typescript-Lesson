//type
type Order = {
    productId: string;
    price: number;
}


type User = {
    firstname: string;
    age: number;
    email: string;
    password: string;
    orders: Order[]
}

const user: User = {
    firstname: 'teste',
    age: 22,
    email: 'nelore@gmail.com',
    password: 'uhhulll',
    orders: [{productId: '1', price: 333}],
}


