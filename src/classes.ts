interface Iperson{
    id: number;
    name: string;
    age: number;
    sayMyName(): string
}

class Person implements Iperson {
    id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age: number){
        this.id = id
        this.name = name
        this.age = age
    }

    sayMyName(): string{
        return this.name
    }
}

//forma simplificada dedeclarar funções
class PersonRefact {
    constructor(
        private id: number,
        private name: string,
        private age: number,
    ){}

    sayMyName(): string{
        return this.name;
    }
}