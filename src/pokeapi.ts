export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    constructor() {}

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        let finalURL = PokeAPI.baseURL + "/location-area";
        if (pageURL) {
            finalURL = pageURL;
        }
        const response = await fetch(finalURL, {
            method: "GET",
        });
        return await response.json();
    }

    async fetchLocation(locationName: string): Promise<Location> {
        let finalURL = `${PokeAPI.baseURL}/location-area/${locationName}`;
        const response = await fetch(finalURL, {
            method: "GET",
        });
        return await response.json()
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