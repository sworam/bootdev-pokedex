import { State } from "./state.js";

export async function commandCatch(state: State, pokemonName?: string) {
    if (!pokemonName) {
        console.log("Which pokemon do you want to catch?");
        return;
    }
    try {
        console.log(`Throwing a Pokeball at ${pokemonName}...`);
        const { catchChance, pokemon } = await calculateCatchChance(state, pokemonName);
        if (Math.random() <= catchChance) {
            console.log(`${pokemonName} was caught!`);
            state.pokedex[pokemonName] = pokemon;
        } else {
            console.log(`${pokemonName} escaped!`);
        }
    } catch (err) {
        console.log("This pokemon does not exist!");
    }
}

async function calculateCatchChance(state: State, pokemonName: string) {
    const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);
    const catchChance = 3 / (pokemon.base_experience/10);
    return { catchChance, pokemon }
}