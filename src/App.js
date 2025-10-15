import React, {useEffect, useState} from 'react';
import Pet from './componenets/Pet';
import NewPetForm from './componenets/CreatePet';
import {getAllPets} from "./crud/read";
import {createPet } from "./crud/create";
import {deletePet} from "./crud/delete";
import {Button} from "@mui/material";

export default function App() {

    // we store all the pets here
    const [pets, setPets] = useState([]);
    //we store the filter here
    const [filter, setFilter] = useState('all'); // 'all', 'cat', 'dog', 'bunny'

    // this loads the pets from localStorage when the site loads
    useEffect(() => {
        const stored = getAllPets();
        setPets(stored);
    }, []);


    // React sites are REACTIVE! So if you update the state, the UI will update.
    // When we put something in the data base, this doesn't change the state, we need to do that too.
    const handleAddPet = (pet) => {
        const updatedPets = createPet(pet); // save the pet to localStorage, and return the updated list
        setPets(updatedPets); // update state to trigger rerender
    };

    // Same as above, but for deleting a pet
    const handleDeletePet = (id) => {
        const updatedPets = deletePet(id); //delete from localStorage
        setPets(updatedPets); // update state
    };

    // down below, when we call cats.map, it will check if we are on the ALL tab, or the CATs tabs. If it is neither, no cats will be shown.
    // the same applies for dogs and bunnies.
    const cats = filter === 'all' || filter === 'cat' ? pets.filter(p => p.type === 'cat') : [];
    const dogs = filter === 'all' || filter === 'dog' ? pets.filter(p => p.type === 'dog') : [];
    const bunnies = filter === 'all' || filter === 'bunny' ? pets.filter(p => p.type === 'bunny') : [];

    return (<div>
                <div className="header">
                    <h1>My Pet Shop</h1>
                    <div className='pet-detail'>
                        <Button onClick={() => setFilter('cat')}>Cats</Button>
                        <Button onClick={() => setFilter('dog')}>Dogs</Button>
                        <Button onClick={() => setFilter('bunny')}>Bunnies</Button>
                        <Button onClick={() => setFilter('all')}>All</Button>
                    </div>
                </div>

                <NewPetForm onAddPet={handleAddPet}/>

                <h1>All Pets ready for a new home</h1>
                <div className="overflow-row">
                    <div className="flex-column">
                        {cats.map(cat => <Pet key={cat.id} {...cat} onDelete={handleDeletePet}/>)}
                    </div>
                    <div className="flex-column">
                        {dogs.map(dog => <Pet key={dog.id} {...dog} onDelete={handleDeletePet}/>)}
                    </div>
                    <div className="flex-column">
                        {bunnies.map(bunny => <Pet key={bunny.id} {...bunny} onDelete={handleDeletePet}/>)}
                    </div>
                </div>
            </div>);
}
