import { useEffect, useState } from "react";
import { locations } from "./location.mock";
import { LocationApiResult } from "./LocationApiResult";
import { Coords, LocationContextInterface } from "./location.context";

export const useLocation = (): LocationContextInterface => {
  const [isLoading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [location, setLocation] = useState<Coords | null>(null);

  const search = (searchKeyword?: string) => {
    setLoading(true);
    setKeyword(searchKeyword || null);
  };

  useEffect(() => {
    locationRequest(keyword?.toLowerCase())
      .then((r) => {
        setLocation(r);
      })
      .catch((e) => setError(e))
      .finally(() => {
        setLoading(false);
      });
  }, [keyword]);

  return { isLoading, error, location, search, keyword };
};

export const locationRequest = (location?: string): Promise<Coords> => {
  return new Promise((resolve, reject) =>
    location && locations[location.toLowerCase()]
      ? resolve(locationTransform(locations[location.toLowerCase()]))
      : reject("no location")
  );
};

const locationTransform = (locationResult: LocationApiResult): Coords => {
  const [firstResult] = locationResult.results;
  if (!firstResult) {
    throw new Error("unable to retrieve location");
  }
  const {
    location: { lat, lng },
    viewport,
  } = firstResult.geometry;
  return { lat, lng, viewport };
};
