// @flow 
import * as React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

type Props = {
    
};
const IsLoading = (props: Props) => {
    console.log('asd')
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" />
        </View>
    );
};

export default IsLoading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginTop: -20,
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});
