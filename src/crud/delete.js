import {getData, saveData} from "./helpers";

export function deletePet(id) {
    const pets = getData("pets").filter(p => p.id !== id);
    saveData("pets", pets);
    return pets;
}