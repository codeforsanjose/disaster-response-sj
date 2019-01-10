import React, { Component } from 'react'
import './MapDisplay.css'


class MapDisplay extends Component {
    
    componentDidMount () {
        const sanJoseLongitude = -121.8863
        const sanJoseLatitude = 37.3382
        const map = new window.L.Map('map');

	    var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
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
