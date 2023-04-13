const info = {
    nombre:"Marcos",
    apellido:"Trujillo",
    edad:25,
    altura:1.71,
    developer:true
}

let edad = info.edad

const info1 = {
    nombre:"Carlos",
    apellido:"Paiva",
    edad:28,
    altura:2,
    developer:false
}
const info2 = {
    nombre:"Robert",
    apellido:"Peña",
    edad:27,
    altura:1.65,
    developer:false
}

const listinfo = new Array(info, info1, info2)
console.log(listinfo);

const orden = listinfo.sort(function(a, b){
    if (a.edad > b.edad) {
        return -1;
    }    if (a.edad < b.edad) {
        return 1;
    }
    return 0
})

console.log(orden);