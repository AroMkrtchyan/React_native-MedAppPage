
import React, { useState } from 'react';
import { StyleSheet, Text, View,  Dimensions} from 'react-native';

import { LineChart } from "react-native-chart-kit";


const Graphic = () => {
    const [graphicData, setgraphicData] = useState([
        {
            data: [200, 300,200,750,130,450,900,526,458],
            color: (opacity = 1) => `#E2B64D`, // optional
            strokeWidth: 2, // optional
            withShadow: false,
            withDots: false,
        },
        {
            data: [500, 650,120,325,230,985,452,650,555],
            color: (opacity = 1) => `#57A8E5`, // optional
            strokeWidth: 2, // optional
            withShadow: false,
            withDots: false,
        },
        {
            data: [0,0,0,0,0,0,0,0,0],
            color: (opacity = 1) => `#57A8E5`, // optional
            strokeWidth: 2, // optional
            withShadow: false,
            withDots: true,
        }
    ]);
    const screenWidth = Dimensions.get('screen').width - 5;

    const data = {
        labels: [21,22,23,24,25,26,27,28,29],
        datasets: graphicData


    };
    const chartConfig = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        propsForLabels:{
            stroke:"#8c8c8c",
            fontSize:"10",
            fill: '#8c8c8c',
        },
        propsForBackgroundLines: {
            stroke:"#8c8c8c",
            strokeWidth: '1',
            paddingTop: 25,
            fill: 'none',
            strokeDasharray:"0",
            x1: 58,
            y1: 175,
            y2: 175,
            x2: screenWidth-25

        },
    };

    console.dir(globalThis);

    return (
        <View style={styles.graphicBlockWrapper}>
            <LineChart  data={data}
                        width={screenWidth}
                        height={200}
                        chartConfig={chartConfig}
                        withShadow={false}
                        withInnerLines={true}
                        withVerticalLines={false}
                        withHorizontalLines={true}
                        withHorizontalLabels={false}
                        style={{
                            paddingVertical: 8,
                            borderRadius: 16,
                            marginLeft:-55,
                        }}
                        onDataPointClick={(x, y, z)=>{console.log(x, y, z)}}

            />
        </View>
    )
};

export default Graphic;



const styles = StyleSheet.create({
    graphicBlockWrapper: {
        marginBottom: 30,
    }
});