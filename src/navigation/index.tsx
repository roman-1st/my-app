import * as React from 'react';
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Page from "../components/MainPage/Page";
import CarPage from "../components/CarPage/CarPage";
import SettingsScreen from "../components/SettingPage/SettingPage";
import {useDispatch, useSelector} from "react-redux";
import {getTranslatedText} from "../utils/func_changeLang";
import {useEffect} from "react";
import {CarsActionTypes} from "../types/cars";

type Props = {

};
export const AppNavigation = (props: Props) => {
    const Stack = createStackNavigator();
    const {language} = useSelector( (state: any) => state.cars)
    const dispatch = useDispatch()
    useEffect(  () => {
        dispatch({type: CarsActionTypes.FETCH_CARS})
    },[])

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={getTranslatedText(language, "pageMainTitle")} component={Page} />
                <Stack.Screen name={getTranslatedText(language, "pageSettingsTitle")} component={SettingsScreen} />
                <Stack.Screen name={getTranslatedText(language, "pageCarTitle")} component={CarPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};