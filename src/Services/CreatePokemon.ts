import { Pokemon } from "../Models/pokemon"

interface CreatePokemonRequest {
    name: string,
    height: number,
    weight: number,
    abilities: string,
    type: Array<string>,
    category: string,
    weaknesses: Array<string>,
    description: string,
}

type CreatePokemonResponse = Pokemon

export class CreatePokemon {
    async execute({name, height, weight, abilities, type, category, weaknesses, description}: CreatePokemonRequest): Promise<CreatePokemonResponse> {
        const pokemon = new Pokemon({name, height, weight, abilities, type, category, weaknesses, description,})

        return pokemon
    }
}