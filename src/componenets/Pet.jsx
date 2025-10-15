import React from 'react';
import {Link} from "react-router-dom";
import "../App.css"
import {PetQuickDetails} from "./PetQuickDetails";

export default function Pet({id, name, age, breed, type, imageId, onDelete}) {
    let color = "#fffaeb"

    if (type === "cat") {
        color = "#ebfbff"
    }
    else if (type === "bunny") {
        color = "#e7e0ff"
    }

    //below is the code that makes the Pet component - see above how we pass in all the pet info?
    //whatever info is passed in, it will be used to make the component.
    //at the bottom, youll see the react router link. This is how you link to another page.
    //The link takes the ID of the pet, so it creates a unique URL for each pet.

    return (<div className="pet-div" style={{backgroundColor: color}}>
        <img
                src={imageId}
                alt={name}
                className="pet-img"
        />
        <div className="pet-name">
            <h1>{name}</h1>
        </div>
        <p>{name} is a {age} year old {breed} {type} available for adoption.</p>
        <button onClick={() => onDelete(id)}>Delete</button>
        <Link to={`/pet-details/${id}`}>
            <button>Go to the pets in depth page</button>
        </Link>
    </div>);
}
