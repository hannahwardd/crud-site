import React from 'react';

export default function Pet(props) {
    return (
            <div className="border p-4 rounded shadow mb-4">
                <h2 className="text-xl font-bold">{props.name} ({props.type})</h2>
                <img
                        src={props.imageId}
                        alt={props.name}
                        className="w-32 h-32 object-cover my-2"
                />
                <p>Breed: {props.breed}</p>
                <p>Age: {props.age}</p>
                <p>Gender: {props.gender}</p>
                <p>Color: {props.color}</p>
                <p>Price: ${props.price}</p>
            </div>
    );
}
