var pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
];


const getAge = pet => new Date().getFullYear() - pet.bornOn; 

let petsWithAge = [];
petsWithAge = pets.map(pet => getAge(pet));
console.log(petsWithAge);

let dogs = [];
dogs = pets.filter((pet)=>{return pet.type == "dog";})
console.log(dogs);

let jasper;
jasper = pets.find(pet=>{return pet.name == 'Jasper'});
console.log(`Jasper is ${getAge(jasper)} years old`);