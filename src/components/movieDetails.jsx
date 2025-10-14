export default function MovieDetails(props)
{
    const actor = props.actors.map((y)=>{
        <li key={y}>{y}</li>
    })
    return(
        <>
        <h5>{props.genre}</h5>
        <h5>{props.director}</h5>
        <ul>{ actor}</ul>

        
        </>
        
    )
}