 import Data from "../../data.js";
 
 export default  function Card(){
    function movies(){
        return(
            Data.map((x)=>(
                <>
                <h1>{x.genre}</h1>


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