import React from 'react';
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
        <div className="pet-name">
            <PetQuickDetails pet={{id, name, age, breed, type, imageId}}/>
        </div>
        <button onClick={() => onDelete(id)}>
            DELETE PET
        </button>
    </div>);
}
