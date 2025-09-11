import { createInterface, type Interface } from "readline";
import { getCommands } from "./command_registry.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => void;
};

export type State = {
    rlInterface: Interface;
    commands: Record<string, CLICommand>;
}

export function initState(): State {
    const rlInterface = createInterface({input: process.stdin, output: process.stdout, prompt: "Pokedex > "});
    const commands = getCommands();
    return {
        rlInterface,
        commands
    };
}