import React, {useEffect, useState} from 'react';
import Pet from './componenets/Pet';
import NewPetForm from './componenets/CreatePet';
import {Button} from "@mui/material";
import {getAllPets} from "./crud/read";

export default function App() {

    //this is where we store all the pets
    const [pets, setPets] = useState([]);

    //you can ignore this, it deals with the database
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('pets') || '[]');
        setPets(stored);
    }, []);

    //this is some code that will add a pet to a list, when run
    function handleAddPet(newPet) {
        const updated = [...pets, newPet];
        localStorage.setItem('pets', JSON.stringify(updated));
        setPets(updated);
    }

    //this is some code that will remove a pet from a list, when run
    function handleDeletePet(id) {
        const updatedPets = pets.filter(p => p.id !== id);
        localStorage.setItem('pets', JSON.stringify(updatedPets));
        setPets(updatedPets);
    }

    //TODO make the buttons filter the pets! How can you use this?
    const cats = pets.filter(pet => pet.type === 'cat');
    const dogs = pets.filter(pet => pet.type === 'dog');
    const bunnies = pets.filter(pet => pet.type === 'bunny');


    return (<div>
        <div className="header">
            <h1>My Pet Shop</h1>
            <div className='pet-detail'>
                <Button variant='contained' style={{height: "56px", margin: "10px", backgroundColor: "antiquewhite", color: "black"}} onClick={() => setPets(cats)}>Cats</Button>
                <Button variant='contained' style={{height: "56px", margin: "10px", backgroundColor: "antiquewhite", color: "black"}} onClick={() => setPets(dogs)}>Dogs</Button>
                <Button variant='contained' style={{height: "56px", margin: "10px", backgroundColor: "antiquewhite", color: "black"}} onClick={() => setPets(bunnies)}>Bunnies</Button>
                <Button variant='contained' style={{height: "56px", margin: "10px", backgroundColor: "antiquewhite", color: "black"}} onClick={() => setPets(getAllPets())}>All</Button>
            </div>
        </div>
        <NewPetForm onAddPet={handleAddPet}/>
        <h1>All Pets ready for a new home</h1>
        <div className="overflow-row">
            <div className="flex-column">
                {cats.map((cat) => (<Pet {...cat} onDelete={handleDeletePet}/>))}
            </div>
            <div className="flex-column">
                {dogs.map((dog) => (<Pet {...dog} onDelete={handleDeletePet}/>))}
            </div>
            <div className="flex-column">
                {bunnies.map((bunny) => (<Pet {...bunny} onDelete={handleDeletePet}/>))}
            </div>
        </div>
    </div>);
}
