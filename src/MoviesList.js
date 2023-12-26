import { useEffect, useState } from 'react';
import classes from './MoviesList.module.css'
const MoviesList = ({movies, handler})=>{
    console.log(movies);
   const[movieslist, setMovieslist] =  useState([]);

    useEffect(()=>{
         setMovieslist(movies);
    },[movies]);

    let count = 0;

   async function deleteHandler(id){
    console.log(id);
          let response =await fetch(`https://rect-61d4c-default-rtdb.firebaseio.com/movies/${id}.json`,{
            method : "DELETE"
          });
        let ans = await response.json();
        handler();
        // let ans = await fetch("https://rect-61d4c-default-rtdb.firebaseio.com/movies.json");
        // let x = await ans.json();

          

// console.log(ans);
        //   let ans = await response.json();
        //   console.log(ans);
        //   setMovieslist
    }
    return <>
    <div className={classes.backdrop} style={{margin: "auto", textAlign:'center'}}>
        {movieslist.map((item)=>{
            return <div  key={Math.random()} className={classes.eachmovie}>
               <li>{item.title}</li>
               <li>{item.director}</li>
               <li>{item.episode_id}</li>
               <li><button onClick={()=>{deleteHandler(item.id)}}>Delete movie</button></li>
            </div>
        })}
    </div>
    </>
};

export default MoviesList;