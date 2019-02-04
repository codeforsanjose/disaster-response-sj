import React, { Component } from 'react'

import './MapDisplay.css'

const meterConversion = 1609.34;

class MapDisplay extends Component {
    
    componentDidMount () {
        const {
            latitude,
            longitude,
        } = this.props;
        
        const radius = isNaN(this.props.radius) ? 0 : this.props.radius;

        // Create map
        const map = new window.L.Map('map');

        // Add OpenStreetMap attribution
        var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
        var osm = new window.L.TileLayer(osmUrl, {minZoom: 4, maxZoom: 20, attribution: osmAttrib});
        map.setView(new window.L.LatLng(latitude, longitude), 11);
        map.addLayer(osm);

        // Add emergency circle
        var circle = window.L.circle([latitude, longitude], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: radius * meterConversion,
        });
        circle.addTo(map);
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
