const list = ["Arroz","Harina","Caraota","Pasta","Tomate"]

const newlist = list.push("Aceite de Girasol")

const deletlist = list.pop()

console.log(list);

const Pelicula = [
    {titulo: "Shrek 2", director: "Andrew Adamson", fecha: 2004},
    {titulo: "Harry Potter y el cáliz de fuego", director: "Mike Newell", fecha: 2005},
    {titulo: "Piratas del Caribe", director: "Espen Sandberg", fecha: 2003}
]

const f = Pelicula.filter(año => (año.fecha < 2010))

const directores = Pelicula.map(Object=> `${Object.director}`)

const titulos = Pelicula.map(Object=> `${Object.titulo}`)

const concatdt = directores.concat(titulos)
const propagacion = [...directores, ...titulos]

console.log(concatdt)
console.log(propagacion)
