/*
Crear una función constructora la cual vamos a llamar computadora deberá tener las siguientes propiedades:

ram:string
cpu:string
disco:string
gpu:boolean
*/

function Computer(ram, cpu, disco, monitor, gpu) {
    this.ram = ram;
    this.cpu = cpu;
    this.disco = disco;
    this.monitor = monitor;
    this.gpu = gpu;
}

/*
Crear 5 computadoras distintas y guardarlas (Array) de manera que luego podamos consultar cuántas computadoras 
tenemos y poder mostrarlas por consola. Además queremos ver el detalle de cada computadora por consola.
*/

const computers = [];

computers.push (
    new Computer('4GB', 'Intel Corei7', '1TB', '14"', true),
    new Computer('8GB', 'Intel Corei5', '512GB', '14"', true),
    new Computer('16GB', 'Intel Corei3', '512GB', '14"', false),
    new Computer('12GB', 'Intel Corei7', '1TB', '14"', true),
    new Computer('4GB', 'Intel Corei5', '512GB', '14"', false)
)

/*
Crear un nuevo Array a partir del primero, donde vamos a guardar solamente las computadoras con gpu.
*/

const computersGpu = computers.filter ((e) => e.gpu)

/*
Resultados
*/
console.log(computers);
console.log(computersGpu)

