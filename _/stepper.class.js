import {clear} from "./modules/clear.module.js";
import {countWordPermutationsModule} from "./modules/countWordPermutations.module";

export class Stepper {
    constructor(word) {
        Stepper.clear();
        Stepper.findResultCount(word);
        // todo:
        //  - create store
        //  - finish result count and set it to the store


        // this.store = window.Redux.createStore()
    }

    nextStep() {
        console.log('next step');
    }

    static clear() {
        clear()
    }

    static findResultCount(word) {
        return countWordPermutationsModule(word);
    }
}