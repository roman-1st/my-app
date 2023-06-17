import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faGear} from "@fortawesome/free-solid-svg-icons/faGear";
import {useNavigation} from "@react-navigation/native";
import {getTranslatedText} from "../../../utils/func_changeLang";

interface SettingsBtnProps {
    language: string,
}
const SettingsBtn = ( {language} : SettingsBtnProps) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(getTranslatedText(language, "pageSettingsTitle"))}>
            <FontAwesomeIcon style={styles.icon} icon={faGear} />
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
        marginRight: 40,
        textAlign: 'center',
    },
    icon: {
        width: 25,
        height: 25,
        margin: 10,
        color: 'rgb(217, 217, 217)',
    },
})
export default SettingsBtn;