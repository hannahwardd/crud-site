import {getData} from "./helpers";

export function getAllPets() {
    return getData("pets");
}

export function getPetById(id) {
    return getData("pets").find(pet => pet.id === id);
}