import { useEffect, useState,useCallback } from "react";
import MoviesList from "./MoviesList";

// let x = 0;
const Movies = ()=>{
 const [movies, setMovies] = useState([]);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);

 let moviesHandler =  useCallback (async () => {
      setLoading(true);
      try{
        let response = await fetch("https://swapi.dev/api/films/");
        if(!response.ok){
            throw new Error("trying to reconnect");
        }
        let data = await response.json();
         setMovies(data.results);
        }
        catch(error)
        {
            setError(error.message)
        }
        setLoading(false)
    },[movies]);


useEffect(()=>{
   console.log("hell mno");
   moviesHandler();
},[])


    return <>
    <section style={{textAlign:"center"}}>
        hello
    </section>
    <section>
        {loading && <h2>loading....</h2>}
        {!loading && error && <h2>{error}</h2>}
        {/* { error && <button onClick={removeHandler}>Cancel</button>} */}
       {movies.length >0 && <MoviesList movies={movies}/>} 
    </section>
    </>;
};

export default Movies;

