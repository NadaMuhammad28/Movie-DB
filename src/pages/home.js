import SearchForm from "../components/searchForm";
import Movies from "../components/movies";
import { useGlobalContext } from "../services/context";

const Home = () => {
  return (
    <div className="container">
      <SearchForm />
      <Movies />
    </div>
  );
};

export default Home;
