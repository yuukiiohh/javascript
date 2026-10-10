const name = "Yuki Kassandra";

let age = 19; // comentario

age = 20; // Variablemodificada

// 2. Creación de variables
let nombre = "Yuki Kassandra";
let numero1 = 10;
let numero2 = 5;

// 3. Impresión en consola de resultados o variables
console.log("Nombre:", nombre);
console.log("Edad:", age);
console.log("Suma:", numero1 + numero2);

// 4. Ejercicio condicional
if (age >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// 5. Ejercicio de ciclos
for (let i = 1; i <= 5; i++) {
  console.log("Número:", i);
}

// 6. Ciclo del 1 al 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

let numbers = [1, 2, 3, 4, 5];

let pokedex = [
  {
    name: "sylveon",
    type: "hada",
    number: 700,
    description:
      "Sylveon es un Pokémon de tipo Hada introducido en la sexta generación. Es la evolución de Eevee cuando sube de nivel con un alto nivel de amistad y conoce un movimiento de tipo Hada.",
  },
  {
    name: "umbreon",
    type: "siniestro",
    number: 197,
    description:
      "Umbreon es un Pokémon de tipo Siniestro introducido en la segunda generación. Es una de las evoluciones de Eevee y evoluciona cuando sube de nivel con un alto nivel de amistad durante la noche.",
  },
  {
    name: "leafeon",
    type: "planta",
    number: 468,
    description:
      "Leafeon es un Pokémon de tipo Planta introducido en la cuarta generación. Es una de las evoluciones de Eevee y evoluciona cuando sube de nivel con un alto nivel de amistad durante el día.",
  },
  {
    name: "glaceon",
    type: "hielo",
    number: 469,
    description:
      "Glaceon es un Pokémon de tipo Hielo introducido en la cuarta generación. Es una de las evoluciones de Eevee y evoluciona cuando sube de nivel con un alto nivel de amistad durante la noche.",
  },
  {
    name: "vaporeon",
    type: "agua",
    number: 134,
    description:
      "Vaporeon es un Pokémon de tipo Agua introducido en la segunda generación. Es una de las evoluciones de Eevee y evoluciona cuando sube de nivel con un alto nivel de amistad cerca de agua.",
  },
  {
    name: "jolteon",
    type: "eléctrico",
    number: 135,
    description:
      "Jolteon es un Pokémon de tipo Eléctrico introducido en la segunda generación. Es una de las evoluciones de Eevee y evoluciona cuando sube de nivel con un alto nivel de amistad durante el día.",
  }
];

console.log(pokedex);

let numbers2 = [1, 2, 3, 4];

let catalogo_peliculas = [
  {
    name: "Amenaza en lo profundo",
    genre: "Terror",
    year: 2020,
    director: "William Eubank",
    description: "Una película de terror que te hará temblar en el fondo del mar."
  },
  {
    name: "Obsession",
    genre: "Thriller",
    year: 2025,
    director: "Curry Barker",
    description: "Un thriller psicológico que te mantendrá al borde de tu corazón."
  },
  {
    name: "American Horror Story",
    genre: "Terror",
    year: 2011,
    director: "Ryan Murphy, Brad Falchuk",
    description: "Una serie de terror que te sumergirá en un mundo de pesadilla."
  },
  {
    name: "The Conjuring",
    genre: "Terror",
    year: 2013,
    director: "James Wan",
    description: "Una película de terror que te hará creer en lo paranormal."
  },
  {
    name: "Sucker Punch",
    genre: "Acción",
    year: 2011,
    director: "Zack Snyder",
    description: "Una película de acción que te mantendrá al borde de tu mente."
  }
];

console.log(catalogo_peliculas);

for(let i = 0; i < catalogo_peliculas.length; i++) 
  console.log(catalogo_peliculas[i].name);

catalogo_peliculas.forEach((pelicula) => {
  console.log("Nombre:", pelicula.name);
  console.log("Género:", pelicula.genre);
});


catalogo_peliculas = [
  {
    name: "Amenaza en lo profundo",
    genre: "Terror",
    year: 2020,
    director: "William Eubank",
    description: "Una película de terror que te hará temblar en el fondo del mar."
  },
  {
    name: "Obsession",
    genre: "Thriller",
    year: 2025,
    director: "Curry Barker",
    description: "Un thriller psicológico que te mantendrá al borde de tu corazón."
  },
  {
    name: "American Horror Story",
    genre: "Terror",
    year: 2011,
    director: "Ryan Murphy, Brad Falchuk",
    description: "Una serie de terror que te sumergirá en un mundo de pesadilla."
  },
  {
    name: "The Conjuring",
    genre: "Terror",
    year: 2013,
    director: "James Wan",
    description: "Una película de terror que te hará creer en lo paranormal."
  },
  {
    name: "Sucker Punch",
    genre: "Acción",
    year: 2011,
    director: "Zack Snyder",
    description: "Una película de acción que te mantendrá al borde de tu mente."
  }
];


catalogo_peliculas = [
  {
    name: "Amenaza en lo profundo",
    genre: "Terror",
    year: 2020,
    director: "William Eubank",
    description: "Una película de terror que te hará temblar en el fondo del mar."
  },
  {
    name: "Obsession",
    genre: "Thriller",
    year: 2025,
    director: "Curry Barker",
    description: "Un thriller psicológico que te mantendrá al borde de tu corazón."
  },
  {
    name: "American Horror Story",
    genre: "Terror",
    year: 2011,
    director: "Ryan Murphy, Brad Falchuk",
    description: "Una serie de terror que te sumergirá en un mundo de pesadilla."
  },
  {
    name: "The Conjuring",
    genre: "Terror",
    year: 2013,
    director: "James Wan",
    description: "Una película de terror que te hará creer en lo paranormal."
  },
  {
    name: "Sucker Punch",
    genre: "Acción",
    year: 2011,
    director: "Zack Snyder",
    description: "Una película de acción que te mantendrá al borde de tu mente."
  }
];

// Crear un nuevo arreglo
let nombres_peliculas = [];

// Recorrer el catálogo y agregar los nombres
catalogo_peliculas.forEach(function(pelicula) {
  nombres_peliculas.push(pelicula.name);
});

console.log(nombres_peliculas);
