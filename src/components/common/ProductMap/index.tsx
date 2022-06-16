import React from 'react';
import { YMaps, Map, Placemark, SearchControl } from 'react-yandex-maps';

// TODO: remove any
type ProductMapType = {
  coordinates: any
}

const ProductMap = ({ coordinates }: ProductMapType) => {
  const x = coordinates;
  return (
    <YMaps>
      <Map
        defaultState={{
          center: x[0],
          zoom: 12,
        }}
        width="100%"
        height="100%">
        {x.map((coordinate: number[]) => <Placemark geometry={coordinate} />)}
        {/* <SearchControl /> */}
      </Map>

    </YMaps>
  );
};

export default ProductMap;
