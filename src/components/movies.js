import { useGlobalContext } from "../services/context";

const Movies = () => {
  const { data } = useGlobalContext();
  console.log(data.Search);
  return (
    <section className="movie-container">
      {data &&
        data.Search?.map((movie) => (
          <article classNam="movie-card">
            <img src={movie.Poster} />
            <div>
              <h4>{movie.Title}</h4>
              <h5>{movie.Year}</h5>
            </div>
          </article>
        ))}
    </section>
  );
};

export default Movies;
