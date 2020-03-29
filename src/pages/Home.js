import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { MAGIC_CARD_API } from '../constants/constants'; 
import MagicCardSpec from '../components/magicCardSpec'; 

const MagicCard = () => {
    const [magicCardApiResult, setMagicCardApiResult] = useState(undefined); 
    const [filteredResults, setFilteredResults] = useState([]);
    const [isResultsFiltered, setIsResultsFiltered] = useState(false);
    const [serachPharse, setSearchPharase] = useState('');

    useEffect(() => {
        axios.get(MAGIC_CARD_API)
            .then((result) => {
                console.log('Magic Card', result.data.cards)
                for (let i = 0; i < result.data.cards.length; i++) {
                    if (result.data.cards[i].imageUrl === undefined) {
                        result.data.cards.splice(i, 1)
                    }
                }
                setMagicCardApiResult(result.data.cards)
        })
    }, [])

    const handleFiltering = (input) => {
        let filteredCardPosts = magicCardApiResult.filter((value) => {
            return value.name.toLowerCase().includes((input.target.value).toLowerCase())
        })
        setFilteredResults(filteredCardPosts)
        setIsResultsFiltered(true)
        setSearchPharase(input.target.value)
    }

    return (
        <div className="[ row container-fluid ] [ mainpage ]">
            <div className="[ col-sm-2 ]"></div>
            <div className="[ col-sm-8 ] [ mainpage__container ]" >
                <h1 className="[ mainpage__container--header ]">Welcome to the amazing world of <br/>Magic Game Cards.<br /><h2 className="[ fa fa-gamepad ]"> </h2></h1>
                <form>
                    <p>Enter a search phrase</p>
                    <input type='text'
                        onChange={handleFiltering}
                        className="[ form-control ]"
                    />
                    <br />
                </form>
            </div>
            <div className="[ col-md-12 ]">
                {
                    (isResultsFiltered) ?
                        <div>
                            <h2>Your search result for {serachPharse}</h2>
                            {
                                (filteredResults.length > 0) ?
                                    filteredResults.map((value, index) => {
                                        return <MagicCardSpec key={index}
                                            id={value.id}
                                            name={value.name}
                                            imageUrl={value.imageUrl}
                                        />
                                    }) :
                                    <div>No Result</div>
                            }
                        </div> :
                        <div>
                            {
                                (magicCardApiResult !== undefined) ?
                                    magicCardApiResult.map((value, index) => {
                                        return <MagicCardSpec key={index}
                                            id={value.id}
                                            name={value.name}
                                            imageUrl={value.imageUrl}
                                        />

                                    }) : <div>I'm working on it... give me a sec ALRIGHT!!!!</div>
                            }
                        </div>
                }
            </div>
        </div>
    );
}

export default MagicCard; 

