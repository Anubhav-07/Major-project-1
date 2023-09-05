import React, { Component } from 'react';

class MapComponent extends Component {
  componentDidMount() {
    this.initMap();
  }

  initMap() {
    const mapOptions = {
      center: { lat: 40.7128, lng: -74.0060 }, // Example coordinates (New York City)
      zoom: 12, // Adjust zoom level as needed
    };

    const map = new window.google.maps.Map(this.mapContainer, mapOptions);

    // You can customize the map further here (e.g., add markers, info windows, etc.)
  }

  render() {
    return (
      <div
        ref={(mapContainer) => (this.mapContainer = mapContainer)}
        style={{ width: '100%', height: '400px' }} // Set your desired map dimensions
      />
    );
  }
}

export default MapComponent;
