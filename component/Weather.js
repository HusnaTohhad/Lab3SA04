import React, { useState } from "react";
import { ImageBackground, Text, StyleSheet } from "react-native";
import Forecast from "./Forecast";


export default function Weather(props){ 
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    return (
        <ImageBackground source={require('../bg.jpg')} style={style.backkdrop}>
            <Text>Zip Code</Text>
            <Text>{props.zipCode}</Text>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
    )
   } 

   const style = StyleSheet.create({
        backkdrop: {
            width: '100%',
            height: '100%'
    }
   })