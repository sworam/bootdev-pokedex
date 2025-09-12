import { CLICommand } from "./state.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapb } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Shows the next 20 locations of the Pokemon world. \
            If end reached starts from the beginning.",
            callback: commandMap,
        },
        mapb: {
            name: "map-back",
            description: "Shows the previous 20 locations of the Pokemon world. \
            Is the same if start reached.",
            callback: commandMapb
        },
        explore: {
            name: "explore <location>",
            description: "Explore all pokemons in a given location. Usage: 'explore <location-name>'",
            callback: commandExplore,
        },
        catch: {
            name: "catch <pokemon>",
            description: "Attempt to catch a pokemon. Usage: 'catch <pokemon-name>'",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect <pokemon>",
            description: "Show details of a caught pokemon. Usage 'inspect <pokemon-name>'",
            callback: commandInspect,
        },
        pokedex: {
            name: "pokedex",
            description: "Shows the names of all pokemon in your pokedex.",
            callback: commandPokedex,
        },
    }
}