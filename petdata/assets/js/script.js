const petData = [
    {
        name: "Purr master",
        species: "Cat",
        favFoods: ["Pasta", "Meatballs", "Pasta and meatballs"],
        birthYear: 2017,
        photo: "./assets/imgs/img01.jpg"
    },
    {
        name: "Lord of the Void",
        species: "Cat",
        favFoods: ["Fermented mangoes"],
        birthYear: 2018,
        photo: "./assets/imgs/img02.jpg"
    },
    {
        name: "Barky ",
        species: "Dog",
        favFoods: ["Human food", "Dog food", "Cat food", "Food"],
        birthYear: 2015,
        photo: "./assets/imgs/img03.jpg"
    },
    {
        name: "Doreen",
        species: "Some sort of fish, maybe",
        favFoods: ["Plankton", "Seaweed"],
        birthYear: 2022,
        photo: "./assets/imgs/img04.jpg"
    },
    {
        name: "Pancake Face",
        species: "Monkey",
        favFoods: ["Bananas", "Chocolate peanuts", "Leafy greens"],
        birthYear: 2020,
        photo: "./assets/imgs/img05.jpg"
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