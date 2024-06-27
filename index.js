/* Fetching data from an api
    fetch() : Function used for making HTTP request to fetch resources
    (JSON Style Data, Images, Files)
    Simplifies asynchronous data fetching in JS and used for
    interacting with APIs to retrieve and send data asynchronously 
    over the web  
    
    fetch(url, {options})
    {options} - 
        method: GET (DEFAULT)   To get a resource   
        method: POST            To send data
        method: PUT             To replace some data
        method: DELETE          To delete some data
*/

// Using ASYNC & AWAIT

let inputBox = document.getElementById("inpBox");
let pokeImg = document.getElementById("pokeImg");

async function fetchData() {
        console.log(`input data: ${inputBox.value}`);
        let input = String(inputBox.value).trim().toLowerCase();
        console.log(`Sanitized data: ${input}`);
        const URL = `https://pokeapi.co/api/v2/pokemon/${input}`;
        try {
                const response = await fetch(URL);
                if (!response.ok) { throw new Error("Not a Pokemon") }
                const data = await response.json();     // Long process, so you need await
                console.log(data.name);
                const image = data.sprites.front_default;
                pokeImg.src = image;
                pokeImg.alt = `input-${data.name}`;
                pokeImg.style = "display: block";
        } catch (err) {
                console.error(err);
        }
}




// Using JS promises chaining
// const URL = `https://pokeapi.co/api/v2/pokemon/pikachu`;
// fetch(URL)
//         .then(response => {
//                 if (!response.ok) throw new Error("Not a pokemon!");
//                 return response.json();
//         })
//         .then(data => {
//                 console.log(data.name);
//                 console.log(data.weight);
//         })
//         .catch(error => console.error(error))