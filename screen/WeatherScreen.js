import React from "react";
import Weather from "../component/Weather";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function WeatherScreen({route}){
    return (
        <View>
            <Weather zipCode={route.params.zipCode}/>
            <statusbar style="auto"/>
        </View>
    );
}