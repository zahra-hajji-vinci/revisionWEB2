import { useState } from 'react';
import { Movie } from "../types";


interface MovieItemProps {
    movie : Movie
}

const MovieItem = ({ movie } : (MovieItemProps)) => {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    return (
        <div onClick={toggleDescription} style={{ cursor: 'pointer', marginBottom: '20px' }}>
            <h2>{movie.title}</h2>
            <h3>Directed by: {movie.director}</h3>
            {showDescription && <p>{movie.description}</p>}
        </div>
    );
};

export default MovieItem;