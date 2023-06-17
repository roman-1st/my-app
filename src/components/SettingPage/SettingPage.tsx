import React, { useState } from 'react';
import {View, Switch, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {CarsState} from "../../types/cars";
import {setLanguage} from "../../redux/actions/cars";
import {getTranslatedText} from "../../utils/func_changeLang";

const SettingsScreen = () => {
    const {language} = useSelector( (state: any) => state.cars)
    const dispatch = useDispatch()
    const toggleLanguage = () => {
        language === "ru"
            ? dispatch(setLanguage("en"))
            : dispatch(setLanguage('ru'))
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}> {getTranslatedText(language, "chooseLanguage")}</Text>
            <View style={[styles.ChangeLangContainer, styles.firstChild]}>
                <Text style={styles.langTitle}> Русский язык </Text>
                <Switch
                    style={styles.switch}
                    value={language === "ru"}
                    onValueChange={(value) => {
                        if ( language !== "ru") {
                            toggleLanguage(); // Включаем русский язык
                        }
                    }}
                />
            </View>
            <View style={styles.ChangeLangContainer}>
                <Text style={styles.langTitle}> English </Text>
                <Switch
                    style={styles.switch}
                    value={language !== "ru"}
                    onValueChange={(value) => {
                        if (value && language !== "en") {
                            toggleLanguage(); // Включаем английский язык
                        }
                    }}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        marginTop: -100,
        marginBottom: 20,
        fontSize: 16,
        fontWeight: "bold",
    },
    ChangeLangContainer: {
        width: 200,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    switch: {
        // backgroundColor: 'red',
        // width: 100,
        // transform: [{ scale: 1.5 }],
    },
    langTitle: {
        fontSize: 18,
    },
    firstChild: {
        marginBottom: 20,
    }


})

export default SettingsScreen;