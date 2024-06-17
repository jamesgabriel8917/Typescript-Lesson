

//função tipada para nao retornar nada (void)
const log = (message: string): void => {
    console.log(message);
}


//interface que define escopo de função
interface MathFunc {
    (x:number, y: number): number;

}

//função com retorno tipado (usando o tipo de dados especificado no Mathfunc)
const sum: MathFunc = (x: number, y: number) => {
    return x + y;
}

