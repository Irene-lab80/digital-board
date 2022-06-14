import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const mapData = {
  center: [55.751574, 37.573856],
  zoom: 5,
};

const coordinates = [
  [56.31411400787571, 43.99142546510246]
];

const ProductMap = () => (
  <YMaps>
    <Map defaultState={mapData}>
      {coordinates.map((coordinate) => <Placemark geometry={coordinate} />)}
    </Map>
  </YMaps>
);

export default ProductMap;
