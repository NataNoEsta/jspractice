const petData = [
    {
        name: "Purr master",
        species: "Cat",
        favFoods: ["Pasta", "Meatballs", "Crackers"],
        birthYear: 2017,
        photo: "https://64.media.tumblr.com/4eae455025e816873ee51db4bcce53dd/ba8c2ee79f2f49dc-eb/s250x400/e6d130b0de00307f9dd1714622c0eede1cb7bca5.pnj"
    },
    {
        name: "Lord",
        species: "Cat",
        favFoods: ["sweet bread"],
        birthYear: 2018,
        photo: "https://64.media.tumblr.com/6b7f6fb1fe0bc1142d8d17c612066c18/55bf1fc6cba57835-6c/s250x400/77ce45ea573b5e119133317956e684e7bb115706.jpg"
    },
    {
        name: "Barky ",
        species: "Dog",
        favFoods: ["Human food", "Crickets"],
        birthYear: 2015,
        photo: "https://64.media.tumblr.com/7e2e3ce8ddf80e00566b22df26f4d76b/80b72052a9e63c0b-5a/s250x400/68ae39d04fd7be36ae4726573e35b56d47864313.jpg"
    },
    {
        name: "Doreen",
        species: "Clown fish",
        favFoods: ["Plankton", "Seaweed"],
        birthYear: 2022,
        photo: "https://64.media.tumblr.com/d6468a5f9cbe67017cd9272224132ab3/7390a60463a84ef8-8e/s250x400/5895ac6349cde9d9206b93323c557bb566083484.jpg"
    },
    {
        name: "Pancake Face",
        species: "Monkey",
        favFoods: ["Bananas", "Andes mints", "Toothpaste"],
        birthYear: 2020,
        photo: "https://64.media.tumblr.com/184195758730d6170d28b3046302554d/d3e4a10699f46f82-cf/s1280x1920/d87213a0ed1846a7aebd638fd5768435b9248bdf.jpg"
    }
];

//calcula la edad basada en año de nacimiento
function age(birthYear) {
    let calculatedAge = new Date().getFullYear() - birthYear;
    if (calculatedAge == 1) {
        return '1 year old'
    }else if (calculatedAge == 0) {
        return 'Baby'
    }else {
        return `${calculatedAge} years old`
    }

}

function foods(foods) {
    return `<h4>Favourite foods:</h4>
    <ul class="foods-list">
        ${foods.map( food => `<li>${food}</li>`).join('')}
    </ul>
    `
}


//crea el template
function petTemplate(pet) {
    return `
    <div class="animal">
        <img class="pet-photo" src="${pet.photo}">
        <h2 class="pet-name">${pet.name}</h2><span class="pet-species">(${pet.species})</span>
        <p><strong>Age:</strong> ${age(pet.birthYear)}</p>
        ${pet.favFoods ? foods(pet.favFoods) : ''}

    </div>
    `
}

//map crea un nuevo array aplicando una funcion
//join une cada objeto y quita las comas
document.getElementById("app").innerHTML = 
`
    <h1 class="app-title">My lovely pets💕</h1>
    ${petData.map(petTemplate).join('')} 
    <p class="footer">These ${petData.length} pets were found</p>
`