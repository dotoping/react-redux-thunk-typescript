import axios from 'axios'
import { Dispatch } from 'redux'
import { PokemonDispatchType, POKEMON_FAILURE, POKEMON_SUCCESS } from './PokemonActionTypes'

export const fetchPokemonData = (pokemonName: string) => async (dispath: Dispatch<PokemonDispatchType>) => {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        const data = res.data

        dispath({
            type: POKEMON_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispath({
            type: POKEMON_FAILURE
        })
    }
} 