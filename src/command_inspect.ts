import { State } from "./state";

export async function commandInspect (state: State, pokemonName: string) {
    if (!(pokemonName in state.pokedex)) {
        console.log(`You don't have a pokemon with the name ${pokemonName}!`);
    }
    const pokemon = state.pokedex[pokemonName];
    console.log(`Name: ${pokemon.name}`);
    console.log(`Height: ${pokemon.height}`);
    console.log(`Weight: ${pokemon.weight}`);
    console.log(`BaseXP: ${pokemon.base_experience}`);
    console.log(`CatchChance: ${pokemon.catchChance}`);
    console.log("Stats:");
    for (const stat of pokemon.stats) {
        console.log(` - ${stat.stat.name}: ${stat.base_stat}`);
    }
    console.log("Types:");
    for (const pokeType of pokemon.types) {
        console.log(` - ${pokeType.type.name}`);
    }
}