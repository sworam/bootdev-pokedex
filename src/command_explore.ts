import { DetailedLocation } from "./pokeapi_types.js";
import { State } from "./state.js";

export async function commandExplore(state: State, location?: string) {
    if (!location) {
        console.log("For this command you need to provide a location.");
        return;
    }
    console.log(`Exploring ${location}...`);

    try {
        const dLocation: DetailedLocation = await state.pokeAPI.fetchLocation(location);
        console.log("Found Pokemon:");
        for (const encounter of dLocation.pokemon_encounters) {
            console.log(` - ${encounter.pokemon.name}`);
        }
    } catch (err) {
        console.log("Could not find location. Please try again.");
    }
}