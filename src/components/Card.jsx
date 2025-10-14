 import Data from "../../data.js";
 import movieDetails from "./movieDetails.jsx";
 
 export default  function Card(){
    function movies(){
        return(
            Data.map((x)=>(
                <>
                <h4>{x.title}</h4>
                <img className="img-styles" src={x.poster}></img>
                <movieDetails genre={x.genre} />
                <p>{x.genre}</p>
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