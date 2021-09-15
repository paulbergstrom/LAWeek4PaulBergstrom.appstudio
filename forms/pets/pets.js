
let petNames= ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']
let withSal = petNames.push('Sal')
console.log(`The third pet is named ${petNames[2]}.`)
let petLength = petNames.length
console.log(`${petNames.length}`)
console.log(`The array has ${petLength} names in it.`)
petNames.pop()
console.log(petNames)