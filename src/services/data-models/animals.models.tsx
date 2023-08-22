export interface ITaxonomyResponse {
  kingdom: string;
  phylum: string;
  class: string;
  order: string;
  family: string;
  genus: string;
  scientific_name: string;
}

//TODO missing info : api contract
export interface ILocationsResponse {
  variable: string;
}

//TODO missing info : api contract
export interface ICharacteristicsResponse {
  variable: string;
}

//TODO: switch out with above interfaces
export interface IAnimalResponse {
  name: string;
  taxonomy: ITaxonomyResponse;
  locations: string[];
  characteristics: Record<string, string>;
}

export type IAnimalsResponse = Array<IAnimalResponse>;
