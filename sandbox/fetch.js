// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

// async function getPokemon(url) {
//   const response = await fetch(url);
//   //check to see if the fetch was successful
//   if (response.ok) {
//     // the API will send us JSON...but we have to convert the response before we can use it
//     // .json() also returns a promise...so we await it as well.
//     const data = await response.json();
//     doStuff(data);
//   }
// }

// async function getPokemonList(url) {
//     //make fetch request
//     const response = await fetch(url);
//     //if response was ok then... ok = boolean
//     if (response.ok) {
//         // convert to the response data to .json()
//         const data = await response.json();
//         //cal the doStuffList function, passing data as the argument
//         doStuffList(data);
//     }
// }

//simplifying the getPokemon and getPokemonList
async function getPokemon(url, doThis) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
      // the API will send us JSON...but we have to convert the response before we can use it
      // .json() also returns a promise...so we await it as well.
      const data = await response.json();
      // execute the callback
      //this is equal to getPokemon or getPokemonList depending on what is the call at the bottom, example: 
      // getPokemon(url, doStuff); or getPokemon(urlList, doStuffList)

      doThis(data);    
    }
}

// function to compare
function compare(a, b) {
    if (a.name > b.name) {
        //sort b before a
        return 1;
    }
    else if (a.name < b.name) {
        // a and b different but unchanged (already in the correct order)
        return -1;
    } else return 0; // a and b are equal
}

// Function to sort the list
function sortPokemon(list) {
    let sortedList = list.sort(compare);
    return sortedList;
}

function doStuff(data) {
    const outputElement = document.querySelector("#output");
    results = data;
    const html = `<h2>${results.name}</h2>
                <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
    outputElement.innerHTML = html;
    console.log("first: ", results);
}

function doStuffList(data) {
    console.log(data);
    const pokeListElement = document.querySelector("#outputList");
    let pokeList = data.results;//use let instead of const because the value is changing/updating
    
    //sort our list before output it calling the function made before
    pokeList = sortPokemon(pokeList);
    pokeList.forEach((pokemon) => {
        const html = `<li>${pokemon.name}</li>`;
        //use the += operator, otherwise if we only use the = the code will replace the current itme/pokemon with the next one, not adding it. 
        pokeListElement.innerHTML += html;
    });
}

getPokemon(url, doStuff);
console.log("second: ", results);

// getPokemonList(urlList, doStuffList)//the one in the top ^
getPokemon(urlList, doStuffList)
