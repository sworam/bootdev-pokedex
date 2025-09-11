import { createInterface } from "readline";
import { getCommands } from "./command_registry.js";


export function cleanInput(input: string): string[] {
    const words = input.split(" ");
    let cleaned_words = [];

    for (const word of words) {
        if (word) {
            cleaned_words.push(word.toLowerCase());
        }
    }

    return cleaned_words;
}

export function startREPL() {
    const rlInterface = createInterface({input: process.stdin, output: process.stdout, prompt: "Pokedex > "});
    rlInterface.prompt();
    rlInterface.on("line", (input) => {
        const words = cleanInput(input);
        if (!words) {
            rlInterface.prompt();
        } else {
            const command = words[0];
            const commands = getCommands();
            if (command in commands) {
                try {
                    commands[command].callback(commands);
                } catch (err) {
                    if (err instanceof Error) {
                        console.log(err.message);
                    }
                }
            } else {
                console.log("Unknown Command")
            }
            rlInterface.prompt();
        }
    });
}