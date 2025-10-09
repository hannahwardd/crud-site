import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCakeCandles, faMoneyCheckDollar, faPalette, faPaw, faVenusMars} from "@fortawesome/free-solid-svg-icons";

export const PetQuickDetails = ({pet}) => {
    return (<div className="pet-quick-details">
        <div className="pet-detail">
            <FontAwesomeIcon icon={faPaw} style={{paddingRight: "5px"}}/>
            <p>{pet.breed}</p>
        </div>
        <div className="pet-detail">
            <FontAwesomeIcon icon={faCakeCandles} style={{paddingRight: "5px"}}/>
            <p>{pet.age}</p>
        </div>
        <div className="pet-detail">
            <FontAwesomeIcon icon={faVenusMars} style={{paddingRight: "5px"}}/>
            <p>{pet.gender}</p>
        </div>
        <div className="pet-detail">
            <FontAwesomeIcon icon={faPalette} style={{paddingRight: "5px"}}/>
            <p>{pet.color}</p>
        </div>
        <div className="pet-detail">
            <FontAwesomeIcon icon={faMoneyCheckDollar} style={{paddingRight: "5px"}}/>
            <p>${pet.price}</p>
        </div>


    </div>)
}