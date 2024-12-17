import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import api from '../../api/axiosConfig';

const Watchlist = ({ watchlistMovies, setWatchlistMovies }) => {
  const [movies, setMovies] = useState([]);

  const getWatchlistMovies = async () => {
    try {
      const response = await api.get('/api/v1/watchlist');
      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWatchlistMovies();
  }, []);

  const removeFromWatchlist = async (movieId) => {
    try {
      await api.delete(`/api/v1/watchlist/${movieId}`);
      setMovies(movies.filter((movie) => movie.id !== movieId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>My Watchlist</h3>
        </Col>
      </Row>
      <Row className="mt-4">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Col key={movie.id} md={4} sm={6} xs={12} className="mb-3">
              <div className="movie-card">
                <img src={movie.poster} alt={movie.title} className="movie-poster" />
                <h5>{movie.title}</h5>
                <Button variant="danger" onClick={() => removeFromWatchlist(movie.id)}>
                  Remove
                </Button>
              </div>
            </Col>
          ))
        ) : (
          <Col>
            <p>No movies in your watchlist.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Watchlist;
