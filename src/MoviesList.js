import classes from './MoviesList.module.css'
const MoviesList = ({movies})=>{
    console.log(movies);
    return <>
    <div className={classes.backdrop} style={{margin: "auto", textAlign:'center'}}>
        {movies.map((item)=>{
            return <div  key={Math.random()} className={classes.eachmovie}>
               <li>{item.title}</li>
               <li>{item.director}</li>
               <li>{item.episode_id}</li>
            </div>
        })}
    </div>
    </>
};

export default MoviesList;