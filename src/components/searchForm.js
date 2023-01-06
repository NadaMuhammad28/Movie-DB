import { useGlobalContext } from "../services/context";

const SearchFrom = () => {
  const { query, err, setQuery } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="form-container">
      <h1>search movies </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={(e) => handleQuery(e)} />
      </form>
      {err.err && <p>{err.msg}</p>}
    </div>
  );
};

export default SearchFrom;
