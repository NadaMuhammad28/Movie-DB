import { useGlobalContext } from "../services/context";
import { Link } from "react-router-dom";
import Loader from "./Loader";
const Movies = () => {
  const { data, isLoading, No_picture_available } = useGlobalContext();
  if (isLoading) return <Loader />;
  return (
    <section className="movie-container">
      {data &&
        data.Search?.map((movie) => (
          <Link
            to={`/${movie.imdbID}`}
            key={movie.imdbID}
            className="movie-card"
          >
            <article>
              <img
                src={
                  movie.Poster === "N/A" ? No_picture_available : movie.Poster
                }
                alt={movie.Title}
              />
              <div className="movie-desc">
                <h4>{movie.Title}</h4>
                <h5>{movie.Year}</h5>
              </div>
            </article>
          </Link>
        ))}
    </section>
  );
};

export default Movies;
