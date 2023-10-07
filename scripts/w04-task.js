/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Jared",
    photo: "images/perfil.jpg",
    favoriteFoods: [
        "Rice", 
        "Pasta", 
        "Chicken Wings",
        "Cesar Salad",
        "Beans"
    ],
    hobbies: [
        "Drawing",
        "Sport",
        "Sleeping",
        "Anime",
        "Manga"
    ],
    placesLived: [

    ]
};

/* Populate Profile Object with placesLive objects */
// ---The way i thought it was XD---(almost got it)
/*let placesProperties = {
    place: "Cota",
    length: "7 Years"
};

function setPlacesLived(placesProperties) {
    array.forEach((placesProperties) => {
        myProfile.placesLived.push(placesProperties);
    });
    
}*/

// ---THE WAY IT IS---
// using the push method and dot notaitions to get to the placesLived array
myProfile.placesLived.push(
    {
        place: "Cota",
        length: "7 Years"
    }
)
myProfile.placesLived.push(
    {
        place: "Suba",
        length: "11 Years"
    }
)

/* DOM Manipulation - Output */

/* Name */

// ---The way i thought it was---almogs almost
// document.querySelector("#name").innerHTML = myProfile.name;
document.querySelector("#name").textContent = myProfile.name;//Here we use the "textConten" instead of the "innerHTML"

/* Photo with attributes */

document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach((food) => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li); 
});

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach((object) => {
    let dt = document.createElement("dt");
    dt.textContent = object.place;

    let dd = document.createElement("dd");
    dd.textContent = object.length;

    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
 
});