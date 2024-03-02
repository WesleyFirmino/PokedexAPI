export interface PokemonProps {
    name: string,
    height: number,
    weight: number,
    abilities: string,
    type: Array<string>,
    category: string,
    weaknesses: Array<string>,
    description: string,
}

export class Pokemon {
    private props: PokemonProps

    get name () {
        return this.props.name
    }    

    get height () {
        return this.props.height
    }

    get weight () {
        return this.props.weight
    }

    get abilities() {
        return this.props.abilities
    }
    
    get type () {
        return this.props.type
    }

    get category() {
        return this.props.category
    }

    get weaknesses() {
        return this.props.weaknesses
    }

    get description () {
        return this.props.description
    }

    constructor(props: PokemonProps) {
        const { name, height, weight, abilities, type, category, weaknesses, description } = props
        
        if(name == ''){
            throw new Error('Name can`t be empty! Please, type it pokemon name')
        }

        this.props = props
    }
}