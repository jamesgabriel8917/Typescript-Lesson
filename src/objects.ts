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
    orders: Order[];
    register(): string;
}

const user: User = {
    firstname: 'teste',
    age: 22,
    email: 'nelore@gmail.com',
    password: 'uhhulll',
    orders: [{productId: '1', price: 333}],
    register(){
        return 'a'
    }

}

//unions
type Author = {
    books: string[],
}

const author: Author & User ={
    age: 22,
    firstname: 'nelore',
    books: ['teste', 'teste 2'],
    email: 'teste@teste.com',
    orders: [{productId: '1', price: 333}],
    password: '12345',
    register(){
        return 'a'
    }

}

//interfaces 
interface UserInterface {
    firtName: string,
    email: string,
}



