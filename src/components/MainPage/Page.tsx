import React, { useState} from "react";
import { StyleSheet, View} from "react-native";
import Header from "./Header/Header";
import { useSelector} from "react-redux";
import CarsList from "./CarsList/CarsList";
import MainMap from "./MainMap/MainMap";
import IsLoading from "../IsLoading/IsLoading";
import Menu from "./Menu/Menu";
const Page: React.FC = ({}:any) => {
    const [viewMode, setViewMode] = useState('list'); // Изначально установлен режим списка
    const { base, isLoading, filterColor, language } = useSelector((state : any) => state.cars)

    const handleToggleView = () => {
        setViewMode(prevMode => (prevMode === 'list' ? 'map' : 'list')); // Переключение между режимами списка и карты
    };

    if (isLoading) return <IsLoading />
    return (
        <View style={styles.container} >
            <Header language={language} />
            <Menu language={language} handleToggleView={handleToggleView} viewMode={viewMode} filterColor={filterColor} base={base} />
                {isLoading ? (
                    <IsLoading />
                ) : (
                    viewMode === 'list' ? (
                        <View style={{flex: 1,}}>
                            <CarsList filterColor={filterColor} language={language} base={base} />
                        </View>
                    ) : (
                        <View style={{flex: 1}}>
                            <MainMap />
                        </View>
                    )
                )}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Page