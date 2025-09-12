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

export interface DetailedLocation {
  encounter_method_rates: EncounterMethodRate[];
  game_index: number;
  id: number;
  location: Location;
  name: string;
  names: Name[];
  pokemon_encounters: PokemonEncounter[];
}

export interface EncounterMethodRate {
  encounter_method: EncounterMethod;
  version_details: VersionDetail[];
}

export interface EncounterMethod {
    name: string,
    url: string,
}

export interface Name {
    language: NavigatorLanguage,
    name: string,
}

export type PokemonEncounter = {
    pokemon: Pokemon;
    version_details: VersionDetail[];
}

export type VersionDetail = {
  encounter_details: EncounterDetail[];
  max_chance: number;
  version: Version;
}

export interface EncounterDetail {
  chance: number
  condition_values: any[]
  max_level: number
  method: Method
  min_level: number
}

export interface Method {
  name: string
  url: string
}

export interface Version {
  name: string
  url: string
}

export type Pokemon = {
    name: string;
    url: "string";
}