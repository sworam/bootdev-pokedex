import { Cache } from "./pokecache.js"

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    private cache = new Cache(60 * 1000);

    constructor() {}

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        let finalURL = pageURL ? pageURL : PokeAPI.baseURL + "/location-area?offset=0&limit=20";

        return this.fetchJSON(finalURL);
    }

    async fetchLocation(locationName: string): Promise<Location> {
        let finalURL = `${PokeAPI.baseURL}/location-area/${locationName}`;

        return this.fetchJSON(finalURL);
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

export type ShallowLocations = {
    count: number;
    next?: string;
    previous?: string;
    results: Location[];
}

export type Location = {
    name: string;
    url: "string";
}