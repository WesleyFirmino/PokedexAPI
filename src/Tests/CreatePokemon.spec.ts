import { describe, expect, it } from 'vitest'
import { CreatePokemon } from '../Services/CreatePokemon'
import { Pokemon } from '../Models/pokemon'

describe('Create a Pokemon', () => {
    it('Should be able to create a pokemon', () => {
        const createPokemon = new CreatePokemon()

        expect(createPokemon.execute({
            name: 'Pikachu',
            height: 0.4,
            weight: 6.0,
            abilities:'Static',
            type: ['Eletric'],
            category: 'Mouse',
            weaknesses: ['Ground'],
            description: 'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.'
        })).resolves.toBeInstanceOf(Pokemon)
    })
})