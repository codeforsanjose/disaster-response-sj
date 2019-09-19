import React, { Component } from 'react'

import './MapDisplay.css'

const meterConversion = 1609.34;
const CONSTANTS = {
  tileURL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  minZoom: 4,
  maxZoom: 20,
  defaultZoom: 10,
  meterConversion: 1609.34
};
const styles = {
  red: {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
  }
};

class MapDisplay extends Component {

    componentDidMount () {
        const {
            latitude,
            longitude,
        } = this.props;

        // ensure radius is number & convert to km
        let {radius} = this.props;
        radius = isNaN(radius) ? 0 : radius * CONSTANTS.meterConversion;

        const coordinates = new window.L.LatLng(latitude, longitude);
        // Create map
        const map = this.map = new window.L.Map('map');

        // Add OpenStreetMap attribution to tile layer and set map view
        const {minZoom, maxZoom, defaultZoom, attribution, tileURL} = CONSTANTS;
        const osm = new window.L.TileLayer(tileURL, {minZoom, maxZoom, attribution});
        map.setView(coordinates, defaultZoom);
        map.addLayer(osm);

        // create markers and emergency circles
        let marker = this.marker = window.L.marker(coordinates);
        const {color, fillColor, fillOpacity} = styles.red;
        let circle = this.circle = window.L.circle(coordinates, {
            color,
            fillColor,
            fillOpacity,
            radius
        });

        // show marker if it's a single point
        if (radius === 0) {
          marker.addTo(map);
        } else {
          circle.addTo(map);
        }
    }

    componentDidUpdate (prevProps) {
      const {
          latitude,
          longitude,
      } = this.props;
      // let for later conversion
      let {radius} = this.props;

      if (latitude !== prevProps.latitude || longitude !== prevProps.longitude || radius !== prevProps.radius) {
          // ensure radius is number
          radius = isNaN(radius) ? 0 : radius * CONSTANTS.meterConversion;

          // recenter map view  on new coordinates
          const currentLatLng = new window.L.LatLng(latitude, longitude);
          this.map.setView(currentLatLng, CONSTANTS.defaultZoom);

          if (radius > 0) {
            // remove existing marker
            this.marker.remove();

            // add circle if it isn't there
            const circleOnMap = (this.map.hasLayer(this.circle));
            (circleOnMap) ? true : this.circle.addTo(this.map);

            // update circle properties
            this.circle.setLatLng(currentLatLng)
                       .setRadius(radius);
            const circleBounds = this.circle.getBounds();
            this.map.fitBounds(circleBounds);
          } else {
            // remove existing circle
            this.circle.remove();

            // add marker if it isn't there
            const markerOnMap = (this.map.hasLayer(this.marker));
            (markerOnMap) ? true : this.marker.addTo(this.map);

            // update marker location
            this.marker.setLatLng(currentLatLng);
          }
      }

    }

    render() {

        return (
            <div className='MapDisplay'>
                <div id='map'></div>
            </div>
        );
    }
}

export default MapDisplay
