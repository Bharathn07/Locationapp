import { StyleSheet, View, Dimensions } from 'react-native';
import { useContext } from 'react';
import { LocationContext } from '../context/locationContext';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export function LocationMap() {
    const { locationStamp } = useContext(LocationContext)

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                mapType={"mutedStandard"}
                provider={PROVIDER_GOOGLE}
                >
                {locationStamp.map((location: any, i: any) => {
                    if (location.coords.lat && location.coords.long) {
                        return (
                        <Marker
                            key={i}
                            coordinate={{
                                latitude: location.coords.lat,
                                longitude: location.coords.long
                            }}
                            title={location.locationName}
                            pinColor={"#f8a25b"}
                        />)
                    }
                })}
            </MapView>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
