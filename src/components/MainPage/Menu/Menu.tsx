// @flow
import * as React from 'react';
import {StyleSheet, View} from "react-native";
import CategoryFilter from "./ChangeColorsModal";
import ChangeMainBtn from "./ChangeMainBtn";
import SettingsBtn from "./SettingsBtn";
import {Car} from "../../../types/cars";

interface MenuProps {
    filterColor: string | null,
    base: Car[],
    viewMode: string,
    handleToggleView: () => void;
    language: string,
};
const Menu = ( {base, filterColor, handleToggleView, viewMode, language}: MenuProps) => {

    return (
        <View style={styles.selectionContainer}>
            <CategoryFilter language={language} filterColor={filterColor} base={base}/>
            <ChangeMainBtn handleToggleView={handleToggleView} viewMode={viewMode} />
            <SettingsBtn language={language} />
        </View>
    );
};

const styles = StyleSheet.create({
    selectionContainer: {
        height: 50,
        width: "100%",
        // paddingTop: 20,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingBottom: 5,
    }
});

export default Menu