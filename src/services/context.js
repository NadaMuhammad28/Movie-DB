import React, { useContext, useEffect, useState } from "react";
import UseFetch from "./useFetch";
const dataContext = React.createContext();
const { REACT_APP_MOVIE_API_KEY } = process.env;
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${REACT_APP_MOVIE_API_KEY}`;
const No_picture_available =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const AppContext = ({ children }) => {
  const [query, setQuery] = useState("kok");
  const { data, err, isLoading } = UseFetch(`&s=${query}`);

  return (
    <dataContext.Provider
      value={{
        API_ENDPOINT,
        query,
        setQuery,
        data,
        err,
        isLoading,
        No_picture_available,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(dataContext);
};

export { AppContext, useGlobalContext, dataContext };
