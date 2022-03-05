var Dogs = 
[   
    {
        "name": "Wishbone",
        "type": "Dog",
        "breed": "American Bulldog cross",
        "secondbreed": "",
        "color": "Black",
        "fertility": "Yes",
        "gender": "Male",
        "age": "2Yrs 1Mths 2Wks (approx)",
        "size": "Large",
        "animalid": "20579",

        "health": "My health has been checked.",
        "vaccinations": "My vaccinations are up to date.",
        "worming": "My worming is up to date.",
        "micro": "I have been microchipped.",
        "microchipnumber": "985113004709947",

        "aboutme": "Wishbone is a super sweet playful guy! He is around a 2 years old, but is still very much a puppy. He loves people and he, like any youngster, will need basic manner training and a patient home willing to put their time and energy into him. Wishbone also seems to play well with other dogs! His perfect doggy pal would be one that can keep up yet be tolerant of his playful antics. He would benefit from a home willing to exhaust his energy and keep him active . Wishbone might jump on you or play mouth because he is young and still learning. Wishbone will require a home with children 13 years and older because he gets so playful and excited he doesn't realize his size and strength. He truly is a smart young man just needs the right home to spoil him rotten! My past owner went through the process of getting me registered as an Emotional Support Animal as well! And I have the Certificate to prove it!",

        "image": "imgs/Wishbone.png",
    },
    {
        "name": "Benny",
        "type": "Dog",
        "breed": "Australian Shepherd cross",
        "secondbreed": "",
        "color": "",
        "fertility": "Yes",
        "gender": "Male",
        "age": "2Yrs 1Mths 4Wks (approx)",
        "size": "",
        "animalid": "23531",

        "health": "My health has been checked.",
        "vaccinations": "My vaccinations are up to date.",
        "worming": "My worming is up to date.",
        "micro": "I have been microchipped.",
        "microchipnumber": "985113005872810",

        "aboutme": "",

        "image": "imgs/Benny.png",
    },
    {
        "name": "Cornelia",
        "type": "Dog",
        "breed": "Boxer cross",
        "secondbreed": "",
        "fertility": "Yes",
        "color": "White",
        "gender": "Female",
        "age": "6Yrs 2Mths 3Wks (approx)",
        "size": "",
        "animalid": "23390",

        "health": "My health has been checked.",
        "vaccinations": "My vaccinations are up to date.",
        "worming": "My worming is up to date.",
        "micro": "I have been microchipped.",
        "microchipnumber": "985113005872687",

        "aboutme": "Cornelia is calm and quiet in their kennel. She needs a home willing to use positive reinforcement training to build their confidence. Cornelia is shy on first meeting but if you give her time they warm up quickly. She would so best in a calm quiet home due to their personality and demeanor.Cornelia seems to do well with other dogs and would love a buddy to play with in their new home. We would suggest laid back, calm dogs in their new home. They are so low maintenance and calm, a hyper, playful dog might stress them out.We would suggest other dogs and/or children meet them prior to being adopted because we want to make sure they do not overwhelm him. In time with TLC, patience, and confidence building they  t perfectly into their forever family.",

        "image": "imgs/Cornelia.png",
    },
    {
        "name": "Niko",
        "type": "Kitten",
        "breed": "Domestic Longhair cross",
        "secondbreed": "",
        "fertility": "Yes",
        "color": "Grey Tabby / White",
        "gender": "Male",
        "age": "3Mths 3Wks",
        "size": "",
        "animalid": "23541",

        "health": "My health has been checked.",
        "vaccinations": "My vaccinations are up to date.",
        "worming": "My worming is up to date.",
        "micro": "I have been microchipped.",
        "microchipnumber": "985113006299812",

        "aboutme": "",

        "image": "imgs/Niko.png",
    },
    {
        "name": "Howard",
        "type": "Cat",
        "breed": "Domestic Short Hair",
        "secondbreed": "Russian",
        "fertility": "Yes",
        "color": "Grey",
        "gender": "Male",
        "age": "Adult",
        "size": "",
        "animalid": "23882",

        "health": "My health has been checked.",
        "vaccinations": "My vaccinations are up to date.",
        "worming": "My worming is up to date.",
        "micro": "I have been microchipped.",
        "microchipnumber": "985113006299853",

        "aboutme": "",

        "image": "imgs/Howard.png",
    },
    {
        "name": "Hemingway",
        "type": "Cat",
        "breed": "Domestic Short Hair cross",
        "secondbreed": "",
        "color": "Grey",
        "fertility": "YES",
        "gender": "Male",
        "age": "3Yrs 3Wks (approx)",
        "size": "",
        "animalid": "23897",

        "health": "My health has been checked.",
        "vaccinations": "My vaccinations are up to date.",
        "worming": "My worming is up to date.",
        "micro": "",
        "microchipnumber": "",

        "aboutme": "",

        "image": "imgs/Hemingway.png",
    },
];

let cardContainer;

let createDogCard = (Dog) => 
{
    if (getAllUrlParams().index == Dog.animalid)
    {
        let card = document.createElement('div');
        card.className = 'card shadow cursor-pointer';

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let name = document.createElement('h2');
        name.innerText = Dog.name;
        name.className = 'dog-name';

        let type = document.createElement('div');
        let typeTitle = document.createElement('b');
        let typeValue = document.createElement('a');
        typeTitle.innerText = "Type";
        typeValue.innerText = Dog.type;
        type.className = 'dog-type';

        let breed = document.createElement('div');
        let breedTitle = document.createElement('b');
        let breedValue = document.createElement('a');
        breedTitle.innerText = "Breed";
        breedValue.innerText = Dog.breed;
        breed.className = 'dog-breed';

        let secondbreed = document.createElement('div');
        let secondbreedTitle = document.createElement('b');
        let secondbreedValue = document.createElement('a');
        secondbreedTitle.innerText = "Second Breed";
        secondbreedValue.innerText = Dog.secondbreed;
        secondbreed.className = 'dog-secondbreed';

        let gender = document.createElement('div');
        let genderTitle = document.createElement('b');
        let genderValue = document.createElement('a');
        genderTitle.innerText = "Gender";
        genderValue.innerText = Dog.gender;
        gender.className = 'dog-gender';

        let color = document.createElement('div');
        let colorTitle = document.createElement('b');
        let colorValue = document.createElement('a');
        colorTitle.innerText = "Color";
        colorValue.innerText = Dog.color;
        color.className = 'dog-color';

        let fertility = document.createElement('div');
        let fertilityTitle = document.createElement('b');
        let fertilityValue = document.createElement('a');
        fertilityTitle.innerText = "Spayed / Neutered";
        fertilityValue.innerText = Dog.fertility;
        fertility.className = 'dog-fertility';

        let age = document.createElement('div');
        let ageTitle = document.createElement('b');
        let ageValue = document.createElement('a');
        ageTitle.innerText = "Age";
        ageValue.innerText = Dog.age;
        age.className = 'dog-age';

        let size = document.createElement('div');
        let sizeTitle = document.createElement('b');
        let sizeValue = document.createElement('a');
        sizeTitle.innerText = "Size";
        sizeValue.innerText = Dog.size;
        size.className = 'dog-size';

        let health = document.createElement('div');
        health.innerText = Dog.health;
        health.className = 'dog-health';

        let vaccinations = document.createElement('div');
        vaccinations.innerText = Dog.vaccinations;
        vaccinations.className = 'dog-vaccinations';

        let worming = document.createElement('div');
        worming.innerText = Dog.worming;
        worming.className = 'dog-worming';

        let micro = document.createElement('div');
        micro.innerText = Dog.micro;
        micro.className = 'dog-micro';

        let animalIdTitle = document.createElement('h5');
        animalIdTitle.innerText = "Animal Identification";
        animalIdTitle.className = 'dog-animalIdTitle';

        let animalId = document.createElement('div');
        let animalIdTitlee = document.createElement('a');
        let animalIdValue = document.createElement('b');
        animalIdTitlee.innerText = "Animal ID: ";
        animalIdValue.innerText = Dog.animalid;
        animalId.className = 'dog-animalId';

        let animalIdBold = document.createElement('b');
        animalIdBold.innerText = "Please take note of the Animal ID before contacting us";
        animalIdBold.className = 'dog-animalIdBold';

        let microchipnumber = document.createElement('p');
        microchipnumber.innerText = "Microchip Number: " + Dog.microchipnumber;
        microchipnumber.className = 'dog-microchipnumber';

        let aboutme = document.createElement('h5');
        aboutme.innerText = "A Little Bit About Me";
        aboutme.className = 'dog-aboutme';

        let aboutmePara = document.createElement('p');
        aboutmePara.innerText = Dog.aboutme;
        aboutmePara.className = 'dog-aboutmePara';

        let imageDiv = document.createElement('div');
        imageDiv.className = '';

        let image = document.createElement('img');
        image.className = 'rightImg';
        image.src = Dog.image;
        image.alt = Dog.name;
        
        cardBody.appendChild(name);

        cardBody.appendChild(type);
        type.appendChild(typeTitle);
        type.appendChild(typeValue);

        cardBody.appendChild(breed);
        breed.appendChild(breedTitle);
        breed.appendChild(breedValue);

        cardBody.appendChild(secondbreed);
        secondbreed.appendChild(secondbreedTitle);
        secondbreed.appendChild(secondbreedValue);

        cardBody.appendChild(gender);
        gender.appendChild(genderTitle);
        gender.appendChild(genderValue);

        cardBody.appendChild(color);
        color.appendChild(colorTitle);
        color.appendChild(colorValue);

        cardBody.appendChild(fertility);
        fertility.appendChild(fertilityTitle);
        fertility.appendChild(fertilityValue);

        cardBody.appendChild(age);
        age.appendChild(ageTitle);
        age.appendChild(ageValue);

        cardBody.appendChild(size);
        size.appendChild(sizeTitle);
        size.appendChild(sizeValue);
        
        cardBody.appendChild(health);
        cardBody.appendChild(vaccinations);
        cardBody.appendChild(worming);
        cardBody.appendChild(micro);

        cardBody.appendChild(animalIdTitle);
        
        cardBody.appendChild(animalId);
        animalId.appendChild(animalIdTitlee);
        animalId.appendChild(animalIdValue);

        cardBody.appendChild(animalIdBold);
        cardBody.appendChild(microchipnumber);

        cardBody.appendChild(aboutme);
        cardBody.appendChild(aboutmePara);

        card.appendChild(cardBody);
        cardContainer.appendChild(card);

        card.appendChild(imageDiv);
        imageDiv.appendChild(image);
    }
}

let initListOfDogs = () => 
{
    if (cardContainer) 
    {
        document.getElementById('dog-card').replaceWith(cardContainer);
        return;
    }

    cardContainer = document.getElementById('dog-card');
    Dogs.forEach((Dog) => 
    {
        createDogCard(Dog);
    });
};

initListOfDogs();