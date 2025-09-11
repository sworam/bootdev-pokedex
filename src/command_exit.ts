import { State } from "./state.js";

export async function commandExit(state: State) {
    console.log("Closing the Pokedex... Goodbye!");
    state.rlInterface.close();
    process.exit(0);
}