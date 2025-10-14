 import Data from "../../data.js";
 
 export default  function Card(){
    function movies(){
        return(
            Data.map((x)=>(
                <>
                <h4>{x.title}</h4>
                <img src={x.poster}></img>
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