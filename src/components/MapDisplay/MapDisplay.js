import React, { Component } from 'react'


import image from './mapPin.png'
import './MapDisplay.css'


class MapDisplay extends Component {
    
    componentDidMount () {
        const sanJoseLongitude = -121.8863
        const sanJoseLatitude = 37.3382
        const map = new window.L.Map('map');

        var greenIcon = window.L.icon({
            iconUrl: image,
            shadowUrl: image,
            iconSize:     [38, 95], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
	    var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        window.L.marker([sanJoseLatitude, sanJoseLongitude], {icon: greenIcon}).addTo(map)
        var osm = new window.L.TileLayer(osmUrl, {minZoom: 4, maxZoom: 20, attribution: osmAttrib})
        map.setView(new window.L.LatLng(sanJoseLatitude, sanJoseLongitude),11)
        map.addLayer(osm)
    }

    render() {

        
        return (
            <div className='MapDisplay'>
                <div id='map'>
                    
                </div>
            </div>
        );
    }
}

export default MapDisplay
