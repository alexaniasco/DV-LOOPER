const methodss = [
    {
      name: "filter",
      description: "Crea un nuevo array con todos los elementos que pasan la prueba implementada por la función dada.",
      codes: [
        {
          description: "Filtrar números pares en un array",
          code: `
            const numbers = [1, 2, 3, 4, 5];
            const evenNumbers = numbers.filter(num => num % 2 === 0);
          `
        },
        {
          description: "Filtrar palabras que contienen una letra específica en un array",
          code: `
            const words = ['hello', 'world', 'apple', 'banana'];
            const wordsWithLetterL = words.filter(word => word.includes('l'));
          `
        },
        {
          description: "Filtrar objetos por una propiedad específica en un array de objetos",
          code: `
            const products = [
              { name: 'T-shirt', price: 20 },
              { name: 'Jeans', price: 50 },
              { name: 'Jacket', price: 100 }
            ];
            const affordableProducts = products.filter(product => product.price <= 50);
          `
        }
      ]
    },
    {
      name: "map",
      description: "Crea un nuevo array con los resultados de llamar a una función para cada elemento del array original.",
      codes: [
        {
          description: "Duplicar todos los elementos de un array de números",
          code: `
            const numbers = [1, 2, 3, 4, 5];
            const doubledNumbers = numbers.map(num => num * 2);
          `
        },
        {
          description: "Convertir un array de objetos a un array de valores de una propiedad específica",
          code: `
            const products = [
              { name: 'T-shirt', price: 20 },
              { name: 'Jeans', price: 50 },
              { name: 'Jacket', price: 100 }
            ];
            const productNames = products.map(product => product.name);
          `
        },
        {
          description: "Calcular el cuadrado de los números de un array de objetos",
          code: `
            const numbers = [
              { num: 2 },
              { num: 4 },
              { num: 6 }
            ];
            const squares = numbers.map(obj => obj.num ** 2);
          `
        }
      ]
    },
    {
      name: "reduce",
      description: "Aplica una función acumuladora a cada elemento de un array, de izquierda a derecha, para reducir el array a un solo valor.",
      codes: [
        {
          description: "Sumar todos los números de un array",
          code: `
            const numbers = [1, 2, 3, 4, 5];
            const sum = numbers.reduce((acc, curr) => acc + curr);
          `
        },
        {
          description: "Encontrar el producto de todos los números de un array",
          code: `
            const numbers = [1, 2, 3, 4, 5];
            const product = numbers.reduce((acc, curr) => acc * curr);
          `
        },
      ]
    },
    {
      name: "forEach",
      description: "Ejecuta una función dada una vez por cada elemento del array.",
      codes: [
        {
          description: "Imprimir todos los elementos de un array en la consola",
          code: `
            const numbers = [1, 2, 3, 4, 5];
            numbers.forEach(num => console.log(num));
          `
        },
        {
          description: "Modificar un array de objetos sin crear un nuevo array",
          code: `
            const products = [
              { name: 'T-shirt', price: 20 },
              { name: 'Jeans', price: 50 },
              { name: 'Jacket', price: 100 }
            ];
            products.forEach(product => product.price *= 1.1);
          `
        },
        {
          description: "Sumar todos los elementos de un array de números",
          code: `
            const numbers = [1, 2, 3, 4, 5];
            let sum = 0;
            numbers.forEach(num => sum += num);
          `
        }
      ]
    },
    {
      name: "find",
      description: "Devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.",
      codes: [
        {
          description: "Encontrar el primer número par en un array",
          code: `
            const numbers = [1, 3, 5, 6, 7, 9];
            const firstEvenNumber = numbers.find(num => num % 2 === 0);
          `
        },
        {
          description: "Encontrar el objeto con una propiedad específica en un array de objetos",
          code: `
            const products = [
              { name: 'T-shirt', price: 20 },
              { name: 'Jeans', price: 50 },
              { name: 'Jacket', price: 100 }
            ];
            const expensiveProduct = products.find(product => product.price >= 50);
          `
        },
        {
          description: "Encontrar la primera palabra en un array que tiene más de 5 letras",
          code: `
            const words = ['hello', 'world', 'how', 'are', 'you'];
            const longWord = words.find(word => word.length > 5);
          `
        }
      ]
    },
    {
      name: "some",
      description: "Comprueba si al menos un elemento del array cumple la función de prueba proporcionada.",
      codes: [
        {
          description: "Comprobar si hay algún número par en un array",
          code: `
            const numbers = [1, 3, 5, 6, 7, 9];
            const hasEvenNumber = numbers.some(num => num % 2 === 0);
          `
        },
        {
          description: "Comprobar si hay algún objeto con una propiedad específica en un array de objetos",
          code: `
            const products = [
              { name: 'T-shirt', price: 20 },
              { name: 'Jeans', price: 50 },
              { name: 'Jacket', price: 100 }
            ];
            const hasExpensiveProduct = products.some(product => product.price >= 50);
          `
        },]
    }]