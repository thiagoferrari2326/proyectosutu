const vestimenta = [
    {nombre: 'remeras' , precio:750, stock:10000, categoria: 'vestimenta' },
     {nombre: 'lompa' , precio:2500, stock:20000, categoria: 'vestimenta' },
     ];
     const joyeria = [
      {nombre: 'cadena full ice 24k' , precio:120000, stock:15000, categoria: 'joyeria' }
      {nombre: 'anillo oro y diamantes' , precio:350000, stock:15000, categoria: 'joyeria' }
      ];
      const accesorios = [
      {nombre: 'lentes burberry' , precio:15000, stock:15000, categoria: 'accesorios' }
      {nombre: 'gorro supreme' , precio:10000, stock:15000, categoria: 'accesorios' }
];


console.log(productardos);
const total= productardos.reduce((stock,productardos) =>{
    return stock + productardos.precio;
    
}, 0);

console.log(total);


const total= productardos.reduce((acc,productardos) =>{
    return acc + productardos.precio;
    
}, 0);

console.log(total);