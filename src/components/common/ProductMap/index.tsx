import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const mapData = {
  center: [56.31411400787571, 43.99142546510246],
  zoom: 12,
};

const coordinates = [
  [56.31411400787571, 43.99142546510246]
];

const ProductMap = () => (
  <YMaps>
    <Map defaultState={mapData} width="100%" height="100%">
      {coordinates.map((coordinate) => <Placemark geometry={coordinate} />)}
    </Map>
  </YMaps>
);

export default ProductMap;
