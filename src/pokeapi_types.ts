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