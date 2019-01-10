import React, { Component } from 'react'
import './MapDisplay.css'


class MapDisplay extends Component {
    
    componentDidMount () {
        const map = new window.L.Map('map');

	    var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        var osm = new window.L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib})
        map.setView(new window.L.LatLng(51.3, 0.7),9)
        map.addLayer(osm)
    }

    render() {

        
        return (
            <div className='MapDisplay'>
            well map
                <div id='map'>
                    
                </div>
            </div>
        );
    }
}

export default MapDisplay
