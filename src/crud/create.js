import {getData, saveData} from "./helpers";

function createPet(pet) {
    const pets = getData("pets");
    const newPet = { ...pet, id: crypto.randomUUID() };
    pets.push(newPet);

    saveData("pets", pets);
}