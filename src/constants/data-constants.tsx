export interface ITaxonomy {
  kingdom: string;
  phylum: string;
  class: string;
  order: string;
  family: string;
  genus: string;
  //TODO: formatter, invalid casing
  scientific_name: string;
}

//TODO missing info : api contract
export interface ILocations {
  variable: string;
}

//TODO missing info : api contract
export interface ICharacteristics {
  variable: string;
}

//TODO: switch out with above interfaces
export interface IAnimalInfo extends IListItemInfo {
  name: string;
  taxonomy: ITaxonomy;
  locations: string[];
  characteristics: Record<string, string>;
}
export interface IListItemInfo {
  id: string;
}
