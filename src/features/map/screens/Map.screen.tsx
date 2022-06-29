import React, { useContext, useMemo } from "react";
import { SafeArea } from "../../../components/utility/SafeArea.component";
import MapView, { Marker, Callout } from "react-native-maps";
import { RestaurantSearch } from "../components/Search.component";
import { LocationContext } from "../../../services/location/LocationContext";
import { RestaurantsContext } from "../../../services/restaurants/mock/restaurantsContext";
import { MapCallout } from "../components/MapCallout.component";

export const MapScreen = () => {
  const COORDS_DELTA = 0.02;
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantsContext);

  const region = useMemo(
    () =>
      location
        ? {
            latitude: location.lat,
            longitude: location.lng,
            latitudeDelta:
              (location.viewport &&
                location.viewport?.northeast.lat -
                  location.viewport?.southwest.lat) ||
              COORDS_DELTA,
            longitudeDelta: COORDS_DELTA,
          }
        : undefined,
    [location]
  );

  return (
    <SafeArea>
      <RestaurantSearch />
      <MapView style={{ flex: 1 }} region={region}>
        {(restaurants || []).map((r) => (
          <Marker
            key={r.id}
            coordinate={{
              latitude: r.coordinates.lat,
              longitude: r.coordinates.lng,
            }}
            title={r.name}
          >
            <Callout>
              <MapCallout restaurant={r} />
            </Callout>
          </Marker>
        ))}
      </MapView>
    </SafeArea>
  );
};
