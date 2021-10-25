
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Entypo} from "@expo/vector-icons";

const TitleBlock = ({title = ''}) => {
    return (
        <View style={styles.pageTitleContainer}>
            <TouchableOpacity style={styles.backButton}>
                <Entypo name="chevron-left" size={24} color="#282828" />
            </TouchableOpacity>
            <Text style={styles.pageTitle}>
                {title}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    pageTitleContainer : {
        flexDirection: "row",
        alignItems: 'center',
        marginVertical : 16,
    },
    pageTitle : {
        fontSize: 16,
        lineHeight: 25,
        color: '#8C8C8C',
    },
    backButton: {
        backgroundColor: '#F0F0F0',
        color: 'red',
        borderRadius: 50,
        width: 40,
        height: 40,
        textAlign: 'center',
        alignItems : 'center',
        justifyContent: 'center',
        marginRight : 16,
    },
});


export default TitleBlock;