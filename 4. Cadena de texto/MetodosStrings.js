name0 = "Marcos"
lastname = "Trujillo"

estudiante = name0.concat(" ",lastname)

estudianteMayus = estudiante.toUpperCase()
estudianteMinus = estudiante.toLowerCase()

var countsstring = estudiante.length

var firstletter = name0.charAt(0)

numstring = lastname.length - 1
var lastletter = lastname.charAt(numstring)

deletespace1 = estudiante.trim()
deletespace2 = estudiante.replace(/ /,"")

var valuename = estudiante.includes("Marcos")

//imprimir
console.log(valuename);