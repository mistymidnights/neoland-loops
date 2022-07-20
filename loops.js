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


/*     **Iteración #6: Mixed For...of e includes**
    Usa un bucle **for...of** para recorrer todos los juguetes y elimina los que incluyan 
    la palabra gato. Recuerda que puedes usar la función ***.includes()*** para comprobarlo.Puedes usar este array: */

    const toys = [
        {id: 5, name: 'Buzz MyYear'}, 
        {id: 11, name: 'Action Woman'}, 
        {id: 23, name: 'Barbie Man'}, 
        {id: 40, name: 'El gato con Guantes'},
        {id: 40, name: 'El gato felix'}
        ]

        
for (let index = 0; index < toys.length; index++) {
    const items = toys[index];
        if (items.name.includes("gato")){
            toys.splice(index, 1)
            toys.splice(index, 1)
        }
}
    console.log(toys)

/*     **Iteración #7: For...of avanzado**
    Usa un bucle **for...of** para recorrer todos los juguetes y añade los que tengan 
    más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array */

    const popularToys = [];
    const toys2 = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]

for (let index = 0; index < toys2.length; index++) {
    const items = toys2[index];
        if (items.sellCount > 15){
            console.log(items)
        }

}
