import React, {Component} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import MapView from 'react-native-maps';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
//const LATITUDE_DELTA = 0.0922;
const LATITUDE_DELTA = 0.00922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export default class Map extends Component {

    state = {
        initialRegion: {
            latitude: -4.978696,
            longitude: -39.056602,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        },
    };

    static navigationOptions = {
        header: null,
        tabBarIcon: ({ tintColor }) => <Icon name="md-globe" size={22} color={tintColor}/>
    };

    render(){
        return (
            <View style={styles.container}>
                <MapView
                    ref={ref => this.map = ref}
                    initialRegion={this.state.initialRegion}
                    mapType={'hybrid'}
                    loadingEnabled={true}
                    showsUserLocation={true}
                    showsPointsOfInterest={false}
                    showsBuildings={false}
                    style={styles.mapView}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    mapView: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
