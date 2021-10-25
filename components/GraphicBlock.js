import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
import Graphic from "./Graphic";

const GraphicPage = () => {
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View style={styles.graphicPageContainer}>
            <View style={styles.graphicPageHeader}>
                <View style={styles.graphicPageIcon}>
                    <Text>
                        I
                    </Text>
                </View>
                <Text  style={styles.graphicPageTitle}>
                    Уровень холестерина
                </Text>
            </View>
            <View style={styles.line} />

            <View style={styles.GraphicWrapper}>
                <View style={styles.optionWrapper}>
                    <Picker
                        selectedValue={selectedValue}
                        style={styles.option}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="За неделю, 21 - 28 августа" value="21-28" />
                        <Picker.Item label="За неделю, 29 - 36 августа" value="29 - 36" />
                    </Picker>
                    <View style={styles.unitWrapper}>
                        <Text style={{...styles.lastReadingsStatusCircle, ...styles.orange}} />
                        <Text style={styles.unit}>Ммоль/л</Text>
                    </View>
                </View>
            </View>

            <Graphic />

            <TouchableOpacity style={styles.printButton} onPress={()=>{}}>
                <Ionicons name="print-outline" size={16} color="black" />
                <Text style={styles.printText}>Распечатать</Text>
            </TouchableOpacity>

        </View>
    )
};


const styles = StyleSheet.create({
    graphicPageContainer: {
        backgroundColor : '#FFF',
        borderRadius: 20,
        paddingHorizontal : 15,
        paddingVertical : 20,
        marginBottom : 30,
    },
    graphicPageHeader : {
        flexDirection: "row",
        alignItems: 'center',
        marginBottom : 20,
    },
    graphicPageIcon : {
        backgroundColor: '#F7F8F9',
        width : 48,
        height : 48,
        justifyContent : 'center',
        alignItems: 'center',
        borderRadius : 50,
        marginRight: 16,
    },
    graphicPageTitle : {
        fontSize: 16,
        lineHeight: 24,
        color: '#282828',
    },

    line : {
        height: 1,
        backgroundColor : '#E6E6E6',
        marginBottom: 20,
    },
    printButton : {
        borderWidth: 2,
        borderColor: "#646464",
        borderRadius: 10,
        padding : 13,
        justifyContent : 'center',
        flexDirection: 'row',
    },
    printText : {
        fontSize: 16,
        color: '#282828',
        marginLeft : 5,
    },

    GraphicWrapper : {
        
    },




    lastReadingsStatusCircle : {
        backgroundColor : 'green',
        borderRadius : 50,
        width: 6,
        height: 6,
        marginRight: 8,
    },
    orange : {
        backgroundColor: '#F29D38',
    },
    unitWrapper : {
        flexDirection:  'row',
        alignItems: 'center',
    },
    unit: {
        fontSize: 10,
        lineHeight: 16,
        color: '#8C8C8C',
    },
    optionWrapper: {
      marginBottom: 20,
    },
    option : {
        height: 25,
        marginBottom: 14,
    }
});

export default GraphicPage;