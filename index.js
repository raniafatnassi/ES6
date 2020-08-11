var pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
];


const getAge = pet => new Date().getFullYear() - pet.bornOn; 

pets.filter((pet)=>{
    console.log(pet.getAge(pet));
})

pets.filter((pet)=>{
    console.log(pet.type == "dog");
})

let jasper;
jasper = pets.find(pet=>{pet.name == 'Jasper'});
console.log(`Jasper is ${jasper.age} years old`);