import {getData, saveData} from "./helpers";

export function updatePet(id, updates) {
    const pets = getData("pets").map(p =>
            p.id === id ? { ...p, ...updates } : p
    );
    saveData("pets", pets);
}