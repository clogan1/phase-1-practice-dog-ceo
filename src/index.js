console.log('%c HI', 'color: firebrick')

//Challenge 1

//fetch the data

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(res => res.json())
.then(json => json.message.forEach(addImages))

//function that does the DOM maninpulations
function addImages(dog) {
    let img = document.createElement('img')
    img.src = dog
    img.style.width = '200px'

    document.querySelector('#dog-image-container').append(img)
}



//fetch data
fetch('https://dog.ceo/api/breeds/list/all')
.then(res => res.json())
.then(json => {

    //could have done Object.keys(json.message)
    for (breed in json.message) {
        if (json.message[breed] != '') {
            json.message[breed].forEach(addBreeds)
        }
        addBreeds(breed)
    }
})

//function for DOM manipulation

function addBreeds(breed){
    let li = document.createElement('li')
    li.textContent = breed

//Challenge 3
    li.addEventListener('click', () => li.style.color = "red")

    document.querySelector('#dog-breeds').append(li)
}

//for breed in messageObject, if value (array) is empty, then print the key
//if value (array) has elements, then iterate over value array



//Challenge 4

document.querySelector('#breed-dropdown').addEventListener('change', (e) => {
    //enter funtion on filtering
    console.log(e.target.value)
    //deleting all lis
    document.querySelectorAll('#dog-breeds li').forEach((element) => element.remove())

    //could have declared a global "all dog breed" array
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(json => {
        for (breed in json.message) {
            //console.log(breed);
            console.log(typeof breed);

            if (breed[0] === e.target.value) {
                addBreeds(breed);
            } 

}
    })


})






//Old notes

//Challenge 2 

//fetch data
// fetch('https://dog.ceo/api/breeds/list/all')
// .then(res => res.json())
// .then(json => {

//     for (breed in json.message) {
//         console.log([breed].length)

//         //work in progress section
//         if (json.message.breed.length === 0 ) {
//             for (subBreed of breed){
//                 addBreeds(subBreed)
//             }
//         }
//         //work in progress end


        

//         addBreeds(breed)
//     }

// })