import { useParams } from "react-router"

const PokemonDetails = (props) => {
    console.log(props)
    const { PokemonId } = useParams()
    console.log('pokemonId:',PokemonId )

    const singlePokemon = props.pokemon.find((poke)=> (
        poke._id ===Number(PokemonId)
    ))

    return(
        <>
            <h2>{singlePokemon.name} Details</h2>
            <dl>
                <dt>Weight:</dt>
                <dd>{singlePokemon.weight}</dd>
                <dt>Height:</dt>
                <dd>{singlePokemon.height}</dd>
            </dl>
        </>
    )
}
export default PokemonDetails
