export type Restaurant = {
  id: number;
  name: string;
  icon?: string;
  photos: string[];
  address?: string;
  isOpenNow?: boolean;
  rating?: number;
  isClosedTemporarily?: boolean;
};
