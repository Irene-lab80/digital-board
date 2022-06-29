/* eslint-disable react/no-array-index-key */
import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

// TODO: remove any
type ProductMapType = {
  coordinates: any
}

const ProductMap = ({ coordinates }: ProductMapType) => {
  const x = coordinates;
  return (
    // <h1>{x}</h1>
    <YMaps>
      <Map
        defaultState={{
          center: x[0],
          zoom: 12,
        }}
        width="100%"
        height="100%">
        {x.map((coordinate: number[], i: number) => <Placemark key={i} geometry={coordinate} />)}
      </Map>
    </YMaps>
  );
};

export default ProductMap;
