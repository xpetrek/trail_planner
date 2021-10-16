import React from 'react';
import { Map, MarkerLayer, Marker, MouseControl, Path, PathLayer, KeyboardControl, ZoomControl, CompassControl } from 'react-mapycz';

const Treks = () => {
  return (
    <div style={{
      padding: '1rem 5rem 1rem 5rem',
      display: 'flex',
    }}>
      <Map width='1080px' height='960px' center={{lat: 50.04890000000005, lng: 14.23}}>
          <MouseControl zoom={true} />
          <KeyboardControl />
          <ZoomControl left={true}/>
          <CompassControl /> 
          <MarkerLayer>
            <Marker coords={{lat: 50.04890000000005, lng: 14.23}} />
            <Marker coords={{lat: 50.14890000000005, lng: 14.23}} />
          </MarkerLayer>
      </Map>
    </div>
      
  );
};
export default Treks;
