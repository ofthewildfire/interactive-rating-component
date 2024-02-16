// Supports weights 100-900
import '@fontsource-variable/overpass';

const mainCard:HTMLElement | null = document.querySelector(".rating-card");
const thankYouCard:HTMLElement | null = document.querySelector(".thankyou-card")
const inputValues = Array.from(document.querySelectorAll('.form__input-label')) ;
const btnSubmit = document.querySelector('.rating-card__form-btn');
const btnReturn = document.querySelector(".thankyou-card__return-btn")
let selectedRating:string;
let resultDisplay:HTMLElement  = document.querySelector('.result__dynamic');


// When a rating is selected.

inputValues.forEach((value) => {
    value.addEventListener("click", (e) => {
        let value:string | "0" = e.target.id
        if (value) {
            const selectedValue:string =  value
            selectedRating = selectedValue     
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
    selectedRating = ""
    thankYouCard?.classList.toggle("hidden")
    mainCard?.classList.toggle("hidden")
}

