import {useParams} from 'react-router-dom';
import {getPetById} from "./crud/read";
import {PetQuickDetails} from "./componenets/PetQuickDetails";
import React from "react";

//TODO create a page that shows the details of a pet, and think about how we could edit the pet

//TODO how could you create a page the creates a new pet, instead of having it on the home page?

export const PetDetails = () => {
    const {petId} = useParams(); // Access the URL parameter

    const {id, name, age, breed, type, imageId} = getPetById(petId);

    return (<div>
        hellloooo {name}
        <div className="pet-name">
            <PetQuickDetails pet={{id, name, age, breed, type, imageId}}/>
        </div>
    </div>)
}