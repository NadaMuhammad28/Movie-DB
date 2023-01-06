import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Loader from "./Loader";

import UseFetch from "../services/useFetch";
import { useGlobalContext } from "../services/context";
const SingleMovie = () => {
  const { id } = useParams();
  const { data, isLoading } = UseFetch(`&i=${id}`);
  const { No_picture_available } = useGlobalContext();
  if (isLoading) return <Loader />;
  return (
    <article className="Single-movie-container">
      <div>
        <img
          src={data.Poster === "N/A" ? No_picture_available : data.Poster}
          alt={data.Title}
          width={data.Poster === "N/A" && "380px"}
        />
      </div>
      <div>
        <h2>{data.Title}</h2>
        <p>{data.Plot === "N/A" ? "no description available" : data.Plot}</p>
        <h4>{data.Year}</h4>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    </article>
  );
};

export default SingleMovie;
