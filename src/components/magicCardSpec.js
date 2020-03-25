import React from 'react';
import { Link } from 'react-router-dom';

const MagicCardSpec = ({ name, imageUrl, id }) => {
    return (
        <div className="[ col-sm-4 ] [ ]">
            <div className=" [ card ] ">
                <h4 className=" [ card__heading ]">{name}</h4>
                <img src={imageUrl} alt="Magic Card game"></img>
                <Link to={`/card-specific/${id}`}className="[ btn btn-primary ]">View More</Link>
            </div>
        </div>
    )
}

export default MagicCardSpec; 