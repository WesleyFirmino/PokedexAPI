import { expect, test } from 'vitest'
import { Pokemon } from '../Models/pokemon'


test('create a pokemon', () => {
    const pokemon = new Pokemon({
        name: 'Pikachu',
        height: 0.4,
        weight: 6.0,
        abilities:'Static',
        type: ['Eletric'],
        category: 'Mouse',
        weaknesses: ['Ground'],
        description: 'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.'
    })

    expect(pokemon).toBeInstanceOf(Pokemon)
    expect(pokemon.name).toEqual('Pikachu')
})

test('validate empty pokemon name', () => {
    const pokemon = new Pokemon({
        name: '',
        height: 0.3,
        weight: 4.0,
        abilities:'Limber',
        type: ['Normal'],
        category: 'Transform',
        weaknesses: ['Fighting'],
        description: 'Its transformation ability is perfect. However, if made to laugh, it can’t maintain its disguise.'
    })

    expect(pokemon).toThrow()
})