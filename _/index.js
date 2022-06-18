import { Stepper } from "./stepper.class.js";

const inputElement = document.querySelector('#input');
const nextStepBtnElement = document.querySelector('#step-forward');
let instance;

nextStepBtnElement.addEventListener('click', () => {
    if (inputElement.value) instance = new Stepper(inputElement.value);
    else if (!instance) return 0;
    else instance.nextStep();
});