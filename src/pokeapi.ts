import { DetailedLocation, ShallowLocations, DetailedPokemon } from "./pokeapi_types.js";
import { Cache } from "./pokecache.js"

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    private cache = new Cache(60 * 1000);

    constructor() {}

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        let finalURL = pageURL ? pageURL : PokeAPI.baseURL + "/location-area?offset=0&limit=20";

        return await this.fetchJSON(finalURL);
    }

    async fetchLocation(locationName: string): Promise<DetailedLocation> {
        let finalURL = `${PokeAPI.baseURL}/location-area/${locationName}`;

        return await this.fetchJSON(finalURL);
    }

    async fetchPokemon(pokemonName: string): Promise<DetailedPokemon> {
        let finalURL = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
        return await this.fetchJSON(finalURL);
    }

    async fetchJSON(url: string) {
        const cachedValue = this.cache.get(url);
        if (cachedValue) {
            console.log("used cached value");
            return cachedValue;
        }

        const response = await fetch(url, {
            method: "GET",
        });
        const data = await response.json();
        this.cache.add(url, data);
        return data;
    } 
}
