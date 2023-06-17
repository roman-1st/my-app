// @flow
import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import { Linking, Button } from 'react-native';
import IsLoading from "../IsLoading/IsLoading";
import {useSelector} from "react-redux";
import {stat} from "react-native-fs";
import {getTranslatedText} from "../../utils/func_changeLang";

const CarPage = ( { route }: any) => {
    const { uId, driverCar } = route.params;
    const { base, language}= useSelector( (state: any) => state.cars)
    const car = base.find( (el : any)  => el.id == uId)

    const phoneNumber =  79818378300;
    const message = `Добрый день, ${driverCar}, подскажите пожалуйста, какой номер заказа у вас сейчас в работе`;

    const handleWhatsApp = () => {
        const whatsappUrl = `whatsapp://send?phone=+${phoneNumber}&text=${encodeURIComponent(message)}`;
        Linking.openURL(whatsappUrl);
    };
    const handleCall = () => {
        const telUrl = `tel:+${phoneNumber}`;
        Linking.openURL(telUrl);
    };
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.title}> {getTranslatedText(language, "infoAbout")} {car.name} {car.model} </Text>
                <Text style={styles.description}> {getTranslatedText(language, "brand")}: {car.name}</Text>
                <Text style={styles.description}> {getTranslatedText(language, "model")}: {car.model}</Text>
                <Text style={styles.description}> {getTranslatedText(language, "year")}: {car.year}</Text>
                <Text style={styles.description}> {getTranslatedText(language, "price")}: {car.price} $</Text>
                <Text style={styles.description}> {getTranslatedText(language, "driver")}: {driverCar}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={handleCall} style={[styles.button, styles.buttonPhone]}>
                    <Text style={styles.buttonText}> {getTranslatedText(language, "call")} </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleWhatsApp} style={ [styles.button, styles.buttonWhatsapp]}>
                    <Text style={styles.buttonText}> {getTranslatedText(language, "write")} </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

    },
    infoContainer: {
        marginTop: 30,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: "100%",
        textAlign: "center",
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    buttonsContainer: {
        marginBottom: 60,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    button: {
        padding: 20,
        borderRadius: 12,
        width: "75%",
        minWidth: 200,
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonWhatsapp: {
        backgroundColor: "#35ff0d"
    },
    buttonPhone: {
        backgroundColor: "#0d72ff",
    },
    buttonText: {
        fontSize: 20,
        color: "#fff",
    }
})

export default CarPage

// #35ff0d