/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = []

/* async displayTemples Function */

const displayTemples = (temples) => 
{
    temples.forEach((temple) => {

        let article = document.createElement("article");

        let h3 = document.createElement("h3");

        h3.innerHTML = temple.templeName;

        let img = document.createElement("img");

        img.src = temple.imageUrl;
        img.alt = temple.location; 

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);

    });

}


/* async getTemples Function using fetch()*/
const getTemples = async () => 
{
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")

    if (response.ok) 
    {
        const data = await response.json();

        templeList = data;

        displayTemples(templeList);
    }
} 

/* reset Function */
const reset = () => 
{
    while (templesElement.firstChild)
    {
        templesElement.removeChild(templesElement.firstChild);
    }
}

/* sortBy Function */

const sortBy = (temples) =>
{
    reset();
    let filter = document.querySelector("#sortBy").value;

    switch (filter) {
        case "utha":
            displayTemples(temples.filter((name) => name.location.includes("Utha")));
            break;
        case "nonutha":
            displayTemples(temples.filter((name) => !name.location.includes("Utha")));
            break;
        case "older":
            displayTemples(temples);
            break;
        case "all":
            displayTemples(temples);
            break;
    }
}


/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) })

getTemples();