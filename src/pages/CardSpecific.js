import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

import { MAGIC_CARD_API } from '../constants/constants'; 

export default function CardSpecific(props) {
    const [cardResult, setCardResult] = useState(undefined);
    
    useEffect(() => {
        axios.get(MAGIC_CARD_API + props.match.params.id)
            .then((result) => {
                console.log(result)
                setCardResult(result.data.card)
            })
            .catch((err) => {
            console.log(err, 'Not working')
        })
    }, [props])

    return (
        <div className="[ row container-fluid ]">
            <div className="[ col-sm-12 ]">
            <h2>Magic Card Specific</h2>
            {
                (cardResult !== undefined) ?
                    <div >
                        <h4>{cardResult.name}</h4>
                        <img src={cardResult.imageUrl} className="[ img-fluid ]" alt={cardResult.name}></img>
                        <p><span>About: </span>{cardResult.text}</p>
                        <p><span>Rarity: </span>{cardResult.rarity}</p>
                        <p><span>Color: </span>{cardResult.colors}</p>
                    </div> :
                    <div>No detailed view available</div>
            }
            <Link className="btn btn-dark" to="/">Go back</Link>
            </div>
        </div>
    ); 
}