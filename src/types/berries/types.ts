export type ListItemApiResponse = {
  name: string;
  url: string;
};

export type BerryListItem = ListItemApiResponse;

export type FirmnessLevel = ListItemApiResponse;

export type FlavorItem = ListItemApiResponse;

export type BerryDetail = {
  name: string;
  id: number;
  firmness: FirmnessLevel;
  flavors: {
    potency: number;
    flavor: FlavorItem;
  }[];
  item: ListItemApiResponse;
  [key: string]: unknown;
};

export type ProcessedBerry = {
  id: number;
  name: string;
  firmness: FirmnessLevel;
  flavors: FlavorItem[];
  image: string;
};

export type BerriesByFirmness = {
  [firmnessName: string]: ProcessedBerry[];
};

export type FirmnessCounts = {
  [firmnessName: string]: number;
};

export type BerryAggregatedData = {
  firmnessLevels: FirmnessLevel[];
  berriesByFirmness: BerriesByFirmness;
  firmnessCounts: FirmnessCounts;
};
