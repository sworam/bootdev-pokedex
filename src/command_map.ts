import { ShallowLocations } from "./pokeapi.js";
import { State } from "./state.js";

export async function commandMap(state: State) {
    let nextLocationURL = state.nextLocationURL ? state.nextLocationURL : undefined;
    await fetchAndDisplayLocations(state, nextLocationURL);
}

export async function commandMapb(state: State) {
    if (state.prevLocationURL) {
        await fetchAndDisplayLocations(state, state.prevLocationURL);
    } else {
        console.log("you're on the first page");
    }
}

async function fetchAndDisplayLocations(state: State, url?: string) {
    const locations = await state.pokeAPI.fetchLocations(url);
    displayShallowLocations(locations);
    state.nextLocationURL = locations.next;
    state.prevLocationURL = locations.previous;
}

function displayShallowLocations(locations: ShallowLocations) {
    for (let location of locations.results) {
        console.log(`${location.name}`);
    }
}