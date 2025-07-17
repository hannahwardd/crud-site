import React, { useState, useEffect } from 'react';
import Pet from './componenets/Pet';
import NewPetForm from './componenets/CreatePet';

export default function App() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('pets') || '[]');
        setPets(stored);
    }, []);

    function handleAddPet(newPet) {
        const updated = [...pets, newPet];
        localStorage.setItem('pets', JSON.stringify(updated));
        setPets(updated); // update React state so UI updates
    }

    return (
            <div className="p-4">
                <NewPetForm onAddPet={handleAddPet} />
                <h2 className="text-xl font-bold mt-8">All Pets</h2>
                {pets.map((pet) => (
                        <Pet key={pet.id} {...pet} />
                ))}
            </div>
    );
}
