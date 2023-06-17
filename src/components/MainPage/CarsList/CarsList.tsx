import * as React from 'react';
import CardCar from "./CardCar/CardCar";
import {Car} from "../../../types/cars";
import { ScrollView, StyleSheet, View} from "react-native";

interface CarsListProps {
    base: Car[],
    filterColor: null | string,
    language: string,
}
const CarsList = ({base, filterColor, language}: CarsListProps) => {

    return (
        <View style={styles.MainContainer}>
            <ScrollView style={styles.scrollContainer}>
                {base.map((el: any) => {
                    if (filterColor === null || el.color === filterColor) {
                        return (
                            <CardCar
                                color={el.color}
                                model={el.model}
                                name={el.name}
                                price={el.price}
                                year={el.year}
                                key={el.id}
                                id={el.id}
                                language={language}
                            />
                        );
                    }
                    return null;
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    MainContainer: {
        // marginBottom: 200,
    },
    scrollContainer: {
        paddingBottom: 100,
        backgroundColor: "white",
    },
});
export default CarsList