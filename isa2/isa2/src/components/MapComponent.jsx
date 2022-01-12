import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapComponent extends Component {
  static defaultProps = {
    center: {
      lat: 45.267136,
      lng: 19.833549
    },
    zoom: 11
  };

  render() {
    return (
      
      <div style={{ height: '100vh', width: '100vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyAYAlurKWdJfgN1RdcpEzmSuKmxuWE6pJk"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            onClick={()=>this.onMarkerClick}
            name={'Current location'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapComponent;