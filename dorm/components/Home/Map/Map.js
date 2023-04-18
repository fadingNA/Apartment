import {useMemo} from "react";

import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';

export default function Maps() {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_API_GOOGLE_MAP,
    })
    if (!isLoaded) {
        return <div>Loading...</div>
    }
    return <MapCard/>
}

function MapCard(factory, deps) {
    const center = useMemo(() => ({
        lat: 44, lng: -80
    }));
    return <GoogleMap zoom={10} center={{lat: 44, lng: -80}}>
        <Marker position={{lat: 44, lng: -80}}/>
    </GoogleMap>
}