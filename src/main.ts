// Supports weights 100-900
import '@fontsource-variable/overpass';

const mainCard:HTMLElement | null = document.querySelector(".rating-card");
const thankYouCard:HTMLElement | null = document.querySelector(".thankyou-card")
const inputValues = Array.from(document.querySelectorAll('.form__input-label')) ;
const btnSubmit = document.querySelector('.rating-card__form-btn');
const btnReturn = document.querySelector(".thankyou-card__return-btn")
let selectedRating:string;
let resultDisplay  = document.querySelector('.result__dynamic') as HTMLElement;


// When a rating is selected.

inputValues.forEach((value) => {
    value.addEventListener("click", (e) => {
        // let id:string = (e.target as HTMLElement)?.id ?? "Invalid";
        let id:string = (e.target as HTMLElement)?.id;



        // Experiment #1
        let labelElement:HTMLLabelElement | null = document.querySelector(`label[for=${id}]`);

       // Reset styles of previously selected label
        if (selectedRating) {
            let previousLabel = document.querySelector(`label[for=${selectedRating}]`) as HTMLElement;
            if (previousLabel) {
                previousLabel.style.backgroundColor = "hsl(217, 12%, 63%, .2)";
                previousLabel.style.color = "hsl(217, 12%, 63%)";
            }
        }

        // Set styles for newly selected label
        if (labelElement) {
            labelElement.style.backgroundColor = "hsl(25, 97%, 53%)";
            labelElement.style.color = "hsl(0, 0%, 100%)";
        }

        // I dont know what I am doing END!

        if (id) {
            const selectedValue:string =  id;
            selectedRating = selectedValue;   
            // let color = document.querySelector(`label[for=${selectedRating}]`);
            // (color as HTMLElement).style.backgroundColor = "hsl(25, 97%, 53%)";
            // (color as HTMLElement).style.color = "white";
            // console.log(color)
        }
    })       
})

// When the button is clicked

btnSubmit?.addEventListener("click", () => {


    if (selectedRating) {
         thankYouCard?.classList.toggle("hidden")
    mainCard?.classList.toggle("hidden")
    
    switch(selectedRating) {
        case "rating-1": 
            resultDisplay.innerText = '1';
        break;
        case "rating-2": 
            resultDisplay.innerText = '2';
        break;
        case "rating-3": 
            resultDisplay.innerText = '3';
        break;
        case "rating-4": 
            resultDisplay.innerText = '4';
        break;
        case "rating-5": 
            resultDisplay.innerText = '5';
        break;
        default: 
            console.log("Invalid selection!")
    }
    }

    else  {
        console.log("You have to select a rating!")
    }
})

btnReturn?.addEventListener("click", resetCard)

function resetCard() {
    (document.querySelector(`label[for=${selectedRating}]`) as HTMLElement).style.backgroundColor = "hsl(217, 12%, 63%, .2)";
    (document.querySelector(`label[for=${selectedRating}]`) as HTMLElement).style.color = "hsl(217, 12%, 63%)";
    selectedRating = "";
    thankYouCard?.classList.toggle("hidden")
    mainCard?.classList.toggle("hidden")
}

