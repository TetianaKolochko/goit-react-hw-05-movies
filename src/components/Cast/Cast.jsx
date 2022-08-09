import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'Services/Api';
import { ActorImg, ActorContainer } from './Cast.styled';

 const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    fetchMovieCast(movieId)
      .then(response => {
        setActors(response.data);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  if (!actors) {
    return;
  }

  const { cast } = actors;
  const actorsList = cast.slice(0, 10);

  return (
    <>
      <ActorContainer>
        {actorsList.map(actor => {
          const { id, name, character, profile_path } = actor;
          return (
            <li key={id}>
              <ActorImg
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ActorContainer>
    </>
  );
};
export default Cast;