/* **Iteración #1: Usa includes**
Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript. */

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

    for (let product of products) {
        console.log("INCLUDES STRING", product.includes("Camiseta"));
    }


/*     **Iteración #2: Condicionales avanzados**

Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** 
a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***. */

const alumns = [
        {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

    for (let index = 0; index < alumns.length; index++) {
        const element = alumns[index];
        let contador = 0;
        contador = element.T1 == true ? contador + 1 : contador;
        contador = element.T2 == true ? contador + 1 : contador;
        contador = element.T3 == true ? contador + 1 : contador;
        element.isApproved = contador >= 2 ? true : false;
    }

console.log(alumns);

/* **Iteración #3: Probando For...of**
Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores. */

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];

for (const places of placesToTravel) {
}
    console.log(placesToTravel);


/* **Iteración #4: Probando For...in**
Usa un **for...in** para imprimir por consola los datos del alienígena.. */

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

    for (const key in alien) {
        if (alien.hasOwnProperty.call(alien, key)) {
            const element = alien[key];
        }
    }

    console.log(alien)

    /* **Iteración #5: Probando For**
Usa un bucle **for** para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en 
un ***console log*** el array. Puedes usar este array: */

const placesToTravel2 = [
    {id: 5, name: 'Japan'},
    {id: 11, name: 'Venecia'},
    {id: 23, name: 'Murcia'},
    {id: 40, name: 'Santander'},
    {id: 44, name: 'Filipinas'},
    {id: 59, name: 'Madagascar'}]

   for (let index = 0; index < placesToTravel2.length; index++) {
    const place = placesToTravel2[index];
        if (place.id === 11 || place.id === 40){
            placesToTravel2.splice(index, 1)
        }
    }
    console.log(placesToTravel2);
