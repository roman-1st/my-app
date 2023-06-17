import React from 'react';
import { StyleSheet, TouchableOpacity} from "react-native";
import {faMapLocation} from "@fortawesome/free-solid-svg-icons/faMapLocation";
import {faList} from "@fortawesome/free-solid-svg-icons/faList";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";

const ChangeMainBtn = ({ handleToggleView, viewMode }: any) => {
    return (
        <TouchableOpacity style={styles.container} onPress={handleToggleView}>
            {
                viewMode === 'list'
                    ? <FontAwesomeIcon icon={faMapLocation} style={ styles.icon} />
                    : <FontAwesomeIcon icon={faList} style={ styles.icon} />
            }
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb( 38, 38, 38)',
        // margin: 10,
        display: "flex",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        textAlign: 'center',
    },
    icon: {
        width: 25,
        height: 25,
        margin: 10,
        color: 'rgb(217, 217, 217)',
    },
})
export default ChangeMainBtn;

