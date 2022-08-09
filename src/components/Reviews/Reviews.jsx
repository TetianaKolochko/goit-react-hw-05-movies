import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'Services/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(response => {
        setReviews(response.data.results);
      })
      .catch(erorr => console.log(erorr));
  }, [movieId]);

  if (!reviews) {
    return;
  }
  return (
    <>
      <ul>
        {reviews.length > 1 ? (
          reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <b>{author}</b>
                <p>{content}</p>
              </li>
            );
          })
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </ul>
    </>
  );
};
export default Reviews;
