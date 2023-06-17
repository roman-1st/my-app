import React from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {drivers} from "../../../../data/drivers";
import {getTranslatedText} from "../../../../utils/func_changeLang";

interface CarCardProps {
    color: string,
    id: number,
    model: string,
    name: string,
    price: number,
    year: number,
    language: string,
}
const CardCar = ({color, id, model, name, price, year, language} : CarCardProps) => {
    const navigation = useNavigation();
    const driver = () => {
        return drivers[id-1]
    }

    return (
        <View style={style.CarContainer}>
            <View style={{justifyContent: "space-between", flexDirection: 'column'}}>
                <View style={style.CarInfo}>
                    <View>
                        <Text style={style.CarName}>{name}</Text>
                        <Text style={style.CarModel}>{model}</Text>
                    </View>
                    <Text style={style.CarId}>#{id} </Text>
                </View>
                <View style={style.CarCategoryCont}>
                    <View style={style.colorBlock}>
                        <Text style={style.CarCategory}>
                            {getTranslatedText (language, "color")}: {getTranslatedText(language, color)}
                        </Text>
                        <View style={[style.colorCircle, { backgroundColor: color }, color === 'white' && { borderWidth: 1, borderColor: 'black' }]} />
                    </View>
                    <View>
                        <Text style={style.CarCategory}>{getTranslatedText (language, "driver")}: {driver()}</Text>
                    </View>
                </View>
            </View>

            <View style={style.LinkCont}>
                <TouchableOpacity style={style.touchableOpacity} onPress={() => navigation.navigate(getTranslatedText(language, "pageCarTitle"), {driverCar: driver(), uId: String(id)})}>
                    <Text  style={style.Button} >{getTranslatedText (language, "goTo")} </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default CardCar

const style = StyleSheet.create({
    CarContainer: {
        height: 150,
        marginHorizontal: 50,
        borderStyle: "solid",
        borderRadius: 15,
        borderColor: 'lightgray',
        marginTop: 20,
        display: "flex",
        flexDirection: 'column',
        justifyContent: "space-between",

        shadowColor: 'rgba(0, 0, 0, 0.5)',
        backgroundColor: '#fff',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 5, // Для Android

        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgb(217, 217, 217)',
    },
    CarInfo: {
        marginTop: 20,
        display: 'flex',
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: 'flex-start',
    },
    CarName: {
        fontSize: 22,
        marginLeft: 30,
        fontWeight: 'bold',
    },
    CarModel: {
        fontSize: 16,
        marginLeft: 30,
    },
    CarId: {
        marginRight: 10,
        marginTop: -10,
    },
    CarCategoryCont: {
        marginTop: 10,
        fontSize: 14,
    },
    CarCategory: {
        marginLeft: 30,
    },
    LinkCont: {
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        fontSize: 10,
    },
    touchableOpacity: {
        backgroundColor: 'rgb( 38, 38, 38)',
        padding: 2,
        marginRight: 20,
        marginBottom: 20,
        borderRadius: 5,
        width: 100,
        height: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    Button: {
        textAlign: 'center',
        fontSize: 12,
        color: 'rgb(217, 217, 217)',
    },
    colorBlock: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    colorCircle: {
        width: 15,
        height: 15,
        marginLeft: 5,
        borderRadius: 50,
    },
})