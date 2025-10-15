import {getData} from "./helpers";

export function getAllPets() {
    console.log(getData("pets"));
    return getData("pets");
}

export function getPetById(id) {
    return getData("pets").find(pet => pet.id === id);
}