import './output.css'
// Supports weights 100-900
import '@fontsource-variable/overpass';

const inputValues = Array.from(document.querySelectorAll('.form__input-label')) ;

const getInputFromForm = () => {
    console.log('Hello, world!')
    console.log(inputValues)
}
const btnSubmit = document.querySelector('.rating-card__form-btn');
btnSubmit?.addEventListener('click', getInputFromForm );
