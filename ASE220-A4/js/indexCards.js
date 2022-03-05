let cardContainer;
var page = 1;
var loadedCount = 2;

var Dogs = 
[   
    {
        "name": "Wishbone",
        "breed": "American Bulldog cross",
        "fertility": "Spayed / Neutered",
        "gender": "Male",
        "age": "2Yrs 1Mths 2Wks (approx)",
        "animalid": "20579",
        "image": "imgs/Wishbone.png",
    },
    {
        "name": "Benny",
        "breed": "Australian Shepherd cross",
        "fertility": "Spayed / Neutered",
        "gender": "Male",
        "age": "2Yrs 1Mths 4Wks (approx)",
        "animalid": "23531",
        "image": "imgs/Benny.png",
    },
    {
        "name": "Cornelia",
        "breed": "Boxer cross",
        "fertility": "Spayed / Neutered",
        "gender": "Female",
        "age": "6Yrs 2Mths 3Wks (approx)",
        "animalid": "23390",
        "image": "imgs/Cornelia.png",
    },
    {
        "name": "Niko",
        "breed": "Domestic Longhair cross",
        "fertility": "Spayed / Neutered",
        "gender": "Male",
        "age": "3Mths 3Wks",
        "animalid": "23541",
        "image": "imgs/Niko.png",
    },
    {
        "name": "Howard",
        "breed": "Domestic Short Hair mixed Russian",
        "fertility": "Spayed / Neutered",
        "gender": "Male",
        "age": "",
        "animalid": "23882",
        "image": "imgs/Howard.png",
    },
    {
        "name": "Hemingway",
        "breed": "Domestic Short Hair cross",
        "fertility": "Spayed / Neutered",
        "gender": "Male",
        "age": "3Yrs 3Wks (approx)",
        "animalid": "23897",
        "image": "imgs/Hemingway.png",
    },
];

let createDogCard = (Dog) => 
{

    let card = document.createElement('div');
    card.className = 'card shadow cursor-pointer';
    card.id = "dog-card-js";

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let image = document.createElement('img');
    image.className = 'leftImg';
    image.src = Dog.image;
    image.alt = Dog.name;

    let name = document.createElement('h5');
    name.innerText = Dog.name;
    name.className = 'dog-name';

    let breed = document.createElement('div');
    breed.innerText = Dog.breed;
    breed.className = 'dog-breed';

    let fertility = document.createElement('div');
    fertility.innerText = Dog.fertility;
    fertility.className = 'dog-fertility';

    let genderAndAge = document.createElement('div');
    if (Dog.age != "")
        genderAndAge.innerText = Dog.gender + " - " + Dog.age;
    else
        genderAndAge.innerText = Dog.gender;
    genderAndAge.className = 'dog-genderAndAge';

    let animalId = document.createElement('div');
    animalId.innerText = "Animal ID: " + Dog.animalid;
    animalId.className = 'dog-animalId';

    let linkButton = document.createElement('a');
    linkButton.innerText = "View Details";
    linkButton.className = 'btn btn-primary';
    linkButton.href = "detail.html?index=" + Dog.animalid;

    card.appendChild(image);
    cardBody.appendChild(name);
    cardBody.appendChild(breed);
    cardBody.appendChild(fertility);
    cardBody.appendChild(genderAndAge);
    cardBody.appendChild(animalId);
    cardBody.appendChild(linkButton);

    card.appendChild(cardBody);
    cardContainer.appendChild(card);

}

function LoadDogs()
{
    var Count = 0;
    Dogs.forEach((Dog) => 
    {
        if (page == 1 && Count >= 2) {}
        else if (page == 2 && (Count < 2 || Count > 3)) {Count++}
        else if (page == 3 && (Count < 4 || Count < 3)) {Count++}
        else
        {
            createDogCard(Dog);
            Count++;
        }
    });
}

function ReloadDogs()
{
    document.getElementById('dog-card-js').remove();
    document.getElementById('dog-card-js').remove();

    var Count = 0;
    Dogs.forEach((Dog) => 
    {
        if (page == 1 && Count >= 2) {}
        else if (page == 2 && (Count < 2 || Count > 3)) {Count++}
        else if (page == 3 && (Count < 4 || Count < 3)) {Count++}
        else
        {
            createDogCard(Dog);
            Count++;
        }
    });
}

let initListOfDogs = () => 
{
    if (cardContainer) 
    {
        document.getElementById('dog-card').replaceWith(cardContainer);
        return;
    }

    cardContainer = document.getElementById('dog-card');
    LoadDogs();
};

let initButtons = () => 
{
    if (document.getElementById("index-button-loadmore"))
    {
        var butLoadMore = document.getElementById("index-button-loadmore").onclick = button_clicked_loadmore;  
    }
    else
    {
        var but1 = document.getElementById("index-button-1").onclick = button_clicked1;
        var but2 = document.getElementById("index-button-2").onclick = button_clicked2;
        var but3 = document.getElementById("index-button-3").onclick = button_clicked3;
        var butNext = document.getElementById("index-button-next").onclick = button_clicked_next;
    }

    function button_clicked1(clicked) 
    {
        if (page == 1) {}
        else
        {
            page = 1;
        }
        ReloadDogs();
    }  

    function button_clicked2(clicked) 
    {
        if (page == 2) {}
        else
        {
            page = 2;
        }
        ReloadDogs();
    }  

    function button_clicked3(clicked) 
    {
        if (page == 3) {}
        else
        {
            page = 3;
        }
        ReloadDogs();
    }  

    function button_clicked_next(clicked) 
    {
        if (page == 3) 
        {
            page = 1;
        }
        else
        {
            page++;
        }
        ReloadDogs();
    }  

    function button_clicked_loadmore(clicked) 
    {
        if (page >= 3) {}
        else
        {
            page++;
            LoadDogs();
            loadedCount == loadedCount + 2;
        }
    }
};

initListOfDogs();
initButtons();