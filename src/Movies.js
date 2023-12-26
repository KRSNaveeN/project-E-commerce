import { useEffect, useState,useCallback } from "react";
import MoviesList from "./MoviesList";

// let x = 0;
const Movies = ()=>{
 const [movies, setMovies] = useState([]);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);
 

 let moviesHandler =  useCallback (async () => {
    console.log("btn click")
      setLoading(true);
      try{
        // let response = await fetch("https://swapi.dev/api/films/");
        let response = await fetch("https://rect-61d4c-default-rtdb.firebaseio.com/movies.json");
        // console.log(response);
        if(!response.ok){
            throw new Error("trying to reconnect");
        }
        let data = await response.json();
        console.log(data);
        //  setMovies(data.results);

        let moviesarr = [];
        for(const key in data)
        {
            moviesarr.push({
                id : key,
                title : data[key].title,
                director:data[key].openingtext,
                episode_id:data[key].releasedate
            })
        }
        setMovies(moviesarr);
        }
        catch(error)
        {
            setError(error.message)
        }
        setLoading(false)
    },[movies]);


useEffect(()=>{
   
   moviesHandler();
},[]);


    return <>
    <section style={{textAlign:"center", padding: "20px"}}>
        <button onClick={moviesHandler}>Fetch</button>
    </section>
    <section>

        {loading && <h2 style={{textAlign:"center"}}>loading....</h2>}
        {!loading && error && <h2>{error}</h2>}
        {/* { error && <button onClick={removeHandler}>Cancel</button>} */}
       {movies.length >0 && <MoviesList movies={movies} handler={moviesHandler}/>} 
    </section>
    </>;
};

export default Movies;

