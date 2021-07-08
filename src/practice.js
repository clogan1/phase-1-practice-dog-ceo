//Global Variables
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
let filteredBreeds;

//initialization function
function initialRender(){
    //dog image 
    fetchDogImg();

    //drop down
    document.querySelector('#breed-dropdown').innerHTML =''
    addLetters();

    //dog breed list
    fetchDogBreeds();

}
initialRender();

//Fetches

//fetch dog images + call show in DOM function
function fetchDogImg(){
    fetch(imgUrl)
    .then(res => res.json())
    .then(json => json.message.forEach(renderDogImg))
}

//fetch dog breeds list + all show in DOM function 
function fetchDogBreeds(){
    fetch(breedUrl)
    .then(res => res.json())
    .then(json => Object.keys(json.message).forEach(renderBreedList)
    //{for (breed in json.message)
        //renderBreedList(breed)}
    )

}

//fetch filtered list of breeds based on letter
function fetchFilteredBreeds(letter){
    fetch(breedUrl)
    .then(res => res.json())
    .then(json => {
        filteredBreeds = Object.keys(json.message).filter((breed) => letter === breed[0])
        filteredBreeds.forEach(renderBreedList)
    })
}

//DOM Manipulations

//render dog images to DOM (limit size) - apprend to #dog-image-container div
function renderDogImg(url){
    //create element
    let img = document.createElement('img')
    //add url
    img.src = url
    img.style.width = '200px'
    //append to DOM
    document.querySelector('#dog-image-container').append(img)
}

//render list of dog breeds -- append to #dog-breeds ul
//event listener for clicking on each li ==> changes text to green (#214F4B)
function renderBreedList(breed){
    //create elements
    let li = document.createElement('li')

    //add content
    li.textContent = breed

    //append to DOM
    document.querySelector('#dog-breeds').append(li)

    //event listener
    li.addEventListener('click', () => li.style.color = '#214F4B')
}

//add letters to dropdown
function addLetters(){
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    letters.forEach((letter) => { 
        //create element
        let option = document.createElement('option')

        //add content
        option.textContent = letter
        option.value = letter

        //append to DOM
        document.querySelector('#breed-dropdown').append(option)
    })
}


//Event Handlers

//event listener to drop down on 'change' -- <select id="breed-dropdown" name="select-breed">
//clear elements of UL using inner HTML
//use filterBreedRender
document.querySelector('#breed-dropdown').addEventListener('change', (e) => {
    //console.log(e.target.value)
    //clear UL
    document.querySelector('#dog-breeds').innerHTML = ''

    //call fetch function
    fetchFilteredBreeds(e.target.value)

})