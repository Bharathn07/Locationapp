import { StyleSheet, Text, View } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';

export function Coords({ lat,long }) {

    const [mapRegion, setmapRegion] = useState({
        latitude: lat,
        longitude: long,
        // latitude: 37.78825,
        // longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    return (
        <View style={styles.container}>
            <MapView
                style={{ alignSelf: 'stretch', height: '100%' }}
                region={mapRegion}
            >
                <Marker coordinate={mapRegion} title='Marker' />
            </MapView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
