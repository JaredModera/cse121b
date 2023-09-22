/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Jared Modera"; //Can also be "let" instead of "const", but the name wont be changed so its not necesary.

const currentYear = "2023";

const profilePicture = "images/perfil.jpg";


/* Step 3 - Element Variables */

/*Use the document.getElementById() method to get the 
HTML element with the id of name and store it in a const 
variable named "nameElement".*/
const nameElement = document.getElementById("name");

const foodElement = document.getElementById("food");

const yearElement = document.querySelector("#year");

const imageElement = document.querySelector("img");//querySelector beacuse it didnt have an id or name

/* Step 4 - Adding Content */

//Assign the nameElement's innerHTML property the fullName variable value.
//The strong tags is for important text in the document.(using template literals)
nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

/*Use the setAttribute method to set the src property of 
the image element and set its value to the file path variable 
set in Step 2.*/
imageElement.setAttribute("src", profilePicture);
// or imageElement.src = profilePicture;

imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */

//Declare an array variable to hold your favorite foods.
let favoriteFoods = ["Pasta", "Pizza", "Garbanzos", "Rice"];

foodElement.innerHTML = favoriteFoods;

const favFood = "Potato";

favoriteFoods.push(favFood);

foodElement.innerHTML += `<br>${favoriteFoods}`; 

favoriteFoods.shift();

foodElement.innerHTML += `<br>${favoriteFoods}`; 

favoriteFoods.pop();

foodElement.innerHTML += `<br>${favoriteFoods}`; 