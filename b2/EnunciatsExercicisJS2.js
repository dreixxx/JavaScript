//A partir d'un array de numeros, mostra la suma de tots ells
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sumaArray1 = array1.reduce((acc, numero) => {
    return acc + numero;
}, 0);
console.log(sumaArray1);
//45

//A partir d'un array d'strings i numeros, mostra un string que els continga tots
let array2 = ["a", 1, "b", 2, "c", 3];
let stringArray2 = array2.reduce((acc, element) => {
    return acc + element;
}, "");
console.log(stringArray2);
// a1b2c3

// A partir d'un array de dies, em torne un OBJECTE amb tants atributs com dies i la posició de cada dia
// És a dir per a l'array ['dilluns', 'dimarts', 'dimecres']
// torne un objecte {dilluns:0, dimarts:1, dimecres:2}
let dies = ["dilluns", "dimarts", "dimecres"];
let objecteDies = {};
dies.forEach((unDia, index) => {
    objecteDies[unDia] = index;
});
console.log(objecteDies);

//A partir d'un array amb objectes Musics (nom i instrument que toca)
//Que torne un array amb els noms de tots els components
// [ 'Joan', 'Pep', 'Vicent Lloret', 'Ariadna', 'Guillem' ]
let musics = [
    { nom: "Joan", instrument: "vocal" },
    { nom: "Pep", instrument: "guitarra" },
    { nom: "Vicent Lloret", instrument: "guitarra" },
    { nom: "Ariadna", instrument: "bateria" },
    { nom: "Guillem", instrument: "baix" },
];
let nomMusics = musics.map((musics) => {
    return musics.nom;
});
console.log(nomMusics);

//Ara feu-ho utilitzant map()
//Fet

//Ara que torne un array només amb els noms del musics que toquen la guitarra
//['Pep', 'Vicent Lloret']
let nomsGuitarra = [];
musics.forEach((music) => {
    if (music.instrument === "guitarra") nomsGuitarra.push(music.nom);
});
console.log(nomsGuitarra);

let nomGuitarraFilter = musics
    .filter((music) => {
        return music.instrument === "guitarra";
    })
    .map((music) => music.nom);
console.log(nomGuitarraFilter);

//Amb reduce
//['Pep', 'Vicent Lloret']
let nomGuitarraString = musics.reduce((acc, music) => {
    if (music.instrument === "guitarra") return acc + music.nom + ", ";
    return acc;
}, "");

let nomGuitarraReduce = nomGuitarraString.split(",", 2);
console.log(nomGuitarraReduce);

/* let guitarPlayers = musics.reduce((accumulator, currentValue) => {
    if (currentValue.instrument === "guitarra") {
      accumulator.push(currentValue.nom);
    }
    return accumulator;
  }, []);
  
  console.log(guitarPlayers); // Output: ['Pep', 'Vicent Lloret'] */
//----------------------------------------------------------------------------------

const users = [
    {
        id: 1,
        name: "Jonathon Haley",
        username: "Monte.Weber2",
        email: "Daphne43@yahoo.com",
        phone: "1-563-675-1857 x11708",
        website: "carmela.net",
        password: "hashed_password",
    },
    {
        id: 2,
        name: "Dean John",
        username: "dd.1",
        email: "deno@google.com",
        phone: "1-123-543-1857 123212",
        website: "dd.net",
        password: "Dean_hashed_password",
    },
];
//Que torne un array d'objectes amb l'email, el tel i la web

let selectedInfoUsers = users.map((user) => {
    return { email: user.email, tel: user.website, phone: user.phone };
});
console.log(selectedInfoUsers);
/* [
    ({
        email: "Daphne43@yahoo.com",
        website: "carmela.net",
        phone: "1-563-675-1857 x11708",
    },
    {
        email: "deno@google.com",
        website: "dd.net",
        phone: "1-123-543-1857 123212",
    }),
]; */
//-----------------------------------------------------
//A partir d'un array de comandes com el proporcionat
let comandes = [
    {
        client: {
            nom: "Manel Viel",
        },
        productes: [
            {
                id: 1,
                nom: "Taronges",
            },
            {
                id: 2,
                nom: "Pomes",
            },
        ],
    },
    {
        client: {
            nom: "Joan Mi",
        },
        productes: [
            {
                id: 3,
                nom: "Peres",
            },
            {
                id: 2,
                nom: "Pomes",
            },
        ],
    },
    {
        client: {
            nom: "Tomas Marin",
        },
        productes: [
            {
                id: 4,
                nom: "Freses",
            },
            {
                id: 2,
                nom: "Peres",
            },
            {
                id: 1,
                nom: "Platans",
            },
        ],
    },
];

// tornar un array anomenat llistat de comandes, on cada element siga un array d'objectes on
// aparega només el client i el producte de la seua comanda.
let llistatDeComandes = comandes.map((comanda) => {
    return comanda.productes.map((producte) => {
        return { client: comanda.client.nom, productes: producte.nom };
    });
});
console.log(llistatDeComandes);
// Exemple:
//llistatDeComandes => [
//    [
//        { client: 'Manel Viel', productes: 'Taronges' },
//        { client: 'Manel Viel', productes: 'Pomes' }
//    ],
//    [
//        { client: 'Joan Mi', productes: 'Peres' },
//         { client: 'Joan Mi', productes: 'Pomes' }
//     ],
//     [
//         { client: 'Tomas Marin', productes: 'Freses' },
//         { client: 'Tomas Marin', productes: 'Peres' },
//         { client: 'Tomas Marin', productes: 'Platans' }
//     ]
// ]
