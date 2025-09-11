import { initState } from "./state.js";


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
    const state = initState();
    state.rlInterface.prompt();
    state.rlInterface.on("line", (input) => {
        const words = cleanInput(input);
        if (!words) {
            state.rlInterface.prompt();
        } else {
            const command = words[0];
            if (command in state.commands) {
                try {
                    state.commands[command].callback(state);
                } catch (err) {
                    if (err instanceof Error) {
                        console.log(err.message);
                    }
                }
            } else {
                console.log("Unknown Command")
            }
            state.rlInterface.prompt();
        }
    });
}