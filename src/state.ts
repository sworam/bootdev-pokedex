import { createInterface, type Interface } from "readline";
import { getCommands } from "./command_registry.js";
import { PokeAPI } from "./pokeapi.js";
import { PokemonWithCatchChance } from "./pokeapi_types.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
    rlInterface: Interface;
    commands: Record<string, CLICommand>;
    pokeAPI: PokeAPI;
    nextLocationURL?: string;
    prevLocationURL?: string;
    pokedex: Record<string, PokemonWithCatchChance>;
}

export function initState(): State {
    const rlInterface = createInterface({input: process.stdin, output: process.stdout, prompt: "Pokedex > "});
    const commands = getCommands();
    return {
        rlInterface,
        commands,
        pokeAPI: new PokeAPI(),
        pokedex: {},
    };
}