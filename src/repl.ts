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