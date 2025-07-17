import {getData} from "./helpers";

function updatePet(id, updates) {
    const pets = getData("pets").map(p =>
            p.id === id ? { ...p, ...updates } : p
    );
    saveData("pets", pets);
}