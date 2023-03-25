import { useContext } from 'react';
import ModalLogin from '../../component/modalLogin/ModalLogin';
import MovieCard from '../../component/movieCard/MovieCard';
import { MovieContext } from '../../context/MovieContext';
import './Home.css';

const Home = () => {
  const { movie } = useContext(MovieContext);
  console.log(movie);
  return (
    <div className="movieContainer">
      {movie?.map((item, i) => (
        <MovieCard key={i} {...item} />
      ))}
    </div>
  );
};

export default Home;

{
  /* <ModalLogin /> */
}
