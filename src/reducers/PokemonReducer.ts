import { POKEMON_SUCCESS, POKEMON_FAILURE, PokemonType, PokemonDispatchType } from './../actions/PokemonActionTypes';

interface InitialState {
    success: boolean
    pokemon?: PokemonType
}

const initialState: InitialState = {
    success: false
}

const PokemonReducer = (state = initialState, action: PokemonDispatchType): InitialState => {
    switch (action.type) {
        case POKEMON_SUCCESS:
            const { abilities, sprites } = action.payload
            return {
                ...state,
                success: true,
                pokemon: {
                    abilities, sprites
                }

            }
        case POKEMON_FAILURE:
            return {
                ...state,
                success: false
            }

        default:
            return state;
    }
}


export default PokemonReducer