import {getData} from "./helpers";

function deletePet(id) {
    const pets = getData("pets").filter(p => p.id !== id);
    saveData("pets", pets);
}