import { Coords } from "../../services/location/location.context";

export type Restaurant = {
  id: string;
  name: string;
  photos: string[];
  coordinates: Coords;
  icon?: string;
  address?: string;
  isOpenNow?: boolean;
  rating?: number;
  isClosedTemporarily?: boolean;
};
