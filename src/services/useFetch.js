import { useEffect, useState } from "react";
import { useGlobalContext } from "./context";

const UseFetch = (query) => {
  const { REACT_APP_MOVIE_API_KEY } = process.env;

  const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${REACT_APP_MOVIE_API_KEY}`;

  const [isLoading, setIsLoaing] = useState(false);
  const [err, setErr] = useState({ err: false, msg: "" });
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    try {
      setIsLoaing(true);
      const res = await fetch(`${url}${query}`);
      const d = await res.json();
      if (d.Response === "False") {
        setErr({ err: true, msg: d.Error });
        setIsLoaing(false);
      } else {
        setData(d);
        setErr("");
        setIsLoaing(false);
      }
    } catch (e) {
      setErr({ err: true, msg: e.message });
    }
  };
  useEffect(() => {
    fetchData(API_ENDPOINT);
  }, [query]);

  return { data, err, isLoading };
};

export default UseFetch;
