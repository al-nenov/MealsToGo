import React, { useContext, useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { SearchMap } from '../components/search/SearchMap';
import styled from 'styled-components/native';
import { LocationContext } from '../context/location.context';
import { RestaurantsContext } from '../context/restaurant.context';
import RestaurantCardCompact from '../components/restaurant/RestaurantCard-compact';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const Txt = styled.Text`
  font-size: 16px;
`;

const MapScreen = ({ navigation }) => {
  const [latDelta, setLatDelta] = useState(0);
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const { viewport, lat, lng } = location;

  useEffect(() => {
    const northeast = viewport.northeast.lat;
    const southwest = viewport.southwest.lat;
    setLatDelta(northeast - southwest);
  }, [location, viewport]);

  return (
    <>
      <SearchMap />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => (
          <MapView.Marker
            key={restaurant.name}
            title={restaurant.name}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
          >
            <MapView.Callout
              onPress={() =>
                navigation.navigate('RestaurantsDetails', { restaurant })
              }
            >
              <RestaurantCardCompact
                restaurant={restaurant}
                forceAndroidWebview
              />
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </Map>
    </>
  );
};

export default MapScreen;
