import { createInterface } from "readline";


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
            console.log(`Your command was: ${words[0]}`);
            rlInterface.prompt();
        }
    });
}