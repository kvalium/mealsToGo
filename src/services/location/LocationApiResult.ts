export type Viewport = {
  northeast: {
    lat: number;
    lng: number;
  };
  southwest: {
    lat: number;
    lng: number;
  };
};

export type LocationApiResult = {
  results: {
    geometry: {
      location: {
        lng: number;
        lat: number;
      };
      viewport: Viewport;
    };
  }[];
  status?: "OK";
};
