import React from "react";
import {StyleSheet, Text, View} from "react-native";
import MapView from "react-native-maps";

const MainMap = () => {
    const regionPetersburg = {
        latitude: 59.9386,
        longitude: 30.3141,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
    }

    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>
                <MapView
                    initialRegion={regionPetersburg}
                    style={styles.map} >
                        {/*<Marker coordinate={regionPetersburg} /> */}
                </MapView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
    },
    mapContainer: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});

export default MainMap

