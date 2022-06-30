import React, { useContext, useMemo } from "react";
import { SafeArea } from "../../../components/utility/SafeArea.component";
import MapView, { Marker, Callout } from "react-native-maps";
import { RestaurantSearch } from "../components/Search.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/mock/restaurants.context";
import { MapCallout } from "../components/MapCallout.component";
import { useNavigation } from "@react-navigation/native";

export const MapScreen = () => {
  const COORDS_DELTA = 0.02;
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantsContext);
  const { navigate } = useNavigation();

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
        {(restaurants || []).map((restaurant) => (
          <Marker
            key={restaurant.id}
            coordinate={{
              latitude: restaurant.coordinates.lat,
              longitude: restaurant.coordinates.lng,
            }}
            title={restaurant.name}
          >
            <Callout
              onPress={() =>
                navigate("RestaurantDetails" as never, { restaurant } as never)
              }
            >
              <MapCallout restaurant={restaurant} />
            </Callout>
          </Marker>
        ))}
      </MapView>
    </SafeArea>
  );
};
