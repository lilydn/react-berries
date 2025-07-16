import { api } from '@/services/api';
import type {
  BerryDetail,
  BerryListItem,
  FirmnessLevel,
} from '@/types/berries';

const ENDPOINTS = {
  BERRIES: '/berry',
  BERRY_FIRMNESS: '/berry-firmness',
  BERRY_FLAVOR: '/berry-flavor',
} as const;

const LIMIT = 100;

type PaginatedResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};
export const fetchBerryList = async (
  limit = LIMIT
): Promise<BerryListItem[]> => {
  const { data } = await api.get<PaginatedResponse<BerryListItem>>(
    `${ENDPOINTS.BERRIES}`,
    {
      params: { limit },
    }
  );
  return data.results;
};

export const fetchBerryDetail = async (
  nameOrId: string | number
): Promise<BerryDetail> => {
  const { data } = await api.get<BerryDetail>(
    `${ENDPOINTS.BERRIES}/${nameOrId}`
  );
  return data;
};

export const fetchItemSprite = async (url: string): Promise<string> => {
  const { data } = await api.get(url);
  return data.sprites.default;
};

export const fetchAllFirmness = async (): Promise<FirmnessLevel[]> => {
  const { data } = await api.get<PaginatedResponse<FirmnessLevel>>(
    `${ENDPOINTS.BERRY_FIRMNESS}`
  );
  return data.results;
};
