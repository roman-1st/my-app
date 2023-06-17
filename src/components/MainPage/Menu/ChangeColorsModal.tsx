import React, { useState } from 'react';
import {View, Text, StyleSheet, Modal, Pressable} from 'react-native';
import {Picker} from "@react-native-picker/picker";
import {Car} from "../../../types/cars";
import {useDispatch} from "react-redux";
import {setFilterColor} from "../../../redux/actions/cars";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faListCheck} from "@fortawesome/free-solid-svg-icons/faListCheck";
import {getTranslatedText} from "../../../utils/func_changeLang";

const ChangeColorsModal = ({filterColor, base, language} : any) => {
    const [modalVisible, setModalVisible] = useState(false);
    const uniqueColors: any = [...new Set(base.map((el: Car) => el.color))];
    const dispatch = useDispatch()
    const handleCategoryChange = (category : any) => {
        dispatch(setFilterColor(category))
    };
    return (
        <>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <Text style={styles.label}> {getTranslatedText(language, "chooseColor")}</Text>
                    <Picker
                        selectedValue={filterColor}
                        onValueChange={handleCategoryChange}
                        style={styles.picker}
                    >
                        <Picker.Item label={getTranslatedText(language, "allColors")} value={null} />
                        {uniqueColors.map ( (el: string, index: number) =>
                            <Picker.Item key={index} label={getTranslatedText(language, el)} value={el} />
                        )}
                    </Picker>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>{getTranslatedText(language, "goBack")}</Text>
                    </Pressable>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <FontAwesomeIcon icon={faListCheck} style={ styles.icon} />
            </Pressable>

        </>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: "rgba( 255,255,255, 0.9)",
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        paddingTop: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    picker: {
        width: 250,
        fontSize: 8,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    icon: {
        width: 25,
        height: 25,
        margin: 10,
        color: 'rgb(217, 217, 217)',
    },
    button: {
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        borderRadius: 5,
        backgroundColor: 'rgb( 38, 38, 38)',
        color: 'rgb(217, 217, 217)',
    },
    buttonOpen: {
        marginLeft: 40,
        color: 'rgb(217, 217, 217)',
    },
    buttonClose: {
        padding: 10,
    },
    textStyle: {
        color: 'rgb(217, 217, 217)',
        fontWeight: 'bold',
        textAlign: 'center',

    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
export default ChangeColorsModal;

