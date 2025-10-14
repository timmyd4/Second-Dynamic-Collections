 import Data from "../../data.js";
 import MovieDetails from "./movieDetails.jsx"; 
 import MovieRating from "./MovieRating.jsx";

 export default function Card(){
    function movies(){
        return(
            Data.map((x)=>(
                <>
                <h4>{x.title}</h4>
                <img className="img-styles" src={x.poster}></img>
                <MovieDetails genre={x.genre} director={x.director} actors={x.actors} />
                <MovieRating rating={x.rating}/>
                
                
                </>
            ))
        )
    }
    

    return(
        <>
        {movies()}
        </>
    )
}