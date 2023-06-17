// @flow
import * as React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {getTranslatedText} from "../../../utils/func_changeLang";

interface HeaderProps {
    language: string,
}
const Header = ({language} : HeaderProps) => {

    return (
        <View style={styles.HeaderContainer}>
            <Text style={styles.text}> {getTranslatedText(language,"carSearchApp" )} </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    HeaderContainer: {
        height: 50,
        backgroundColor: 'rgb( 38, 38, 38)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgb(217, 217, 217)',
    },
});
export default Header

