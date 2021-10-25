
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import AddButton from "./AddButton";
import LastReadingsItems from "./LastReadingsItems";

const LastReadings = ({title = '', lastReadingsData,  popupOpener}) => {
    return (
        <View>
            <View style={styles.lastReadingsContainer}>
                <View style={styles.backButton}>
                    <Text style={styles.lastReadingsText}>
                        {title}
                    </Text>
                </View>
                <View style={styles.lastReadingsStatusContainer}>
                    <View style={styles.lastReadingsStatusWrapper}>
                        <Text style={{...styles.lastReadingsStatusCircle, ...styles.green}} />
                        <Text style={styles.lastReadingsStatus}>В норме</Text>
                    </View>
                    <View style={styles.lastReadingsStatusWrapper}>
                        <Text style={{...styles.lastReadingsStatusCircle, ...styles.orange}} />
                        <Text style={styles.lastReadingsStatus}>Ниже нормы</Text>
                    </View>
                    <View style={styles.lastReadingsStatusWrapper}>
                        <Text style={{...styles.lastReadingsStatusCircle, ...styles.red}} />
                        <Text style={styles.lastReadingsStatus}>Ухудшение</Text>
                    </View>
                </View>
            </View>
            <AddButton />
            {lastReadingsData.map((data) => {
                return <LastReadingsItems popupOpener = {popupOpener} data={data} key={data.id}/>
            })}
        </View>

    )
};
const styles = StyleSheet.create({
    lastReadingsContainer : {
        marginBottom : 30,
    },
    lastReadingsText : {
        fontSize: 20,
        color: '#282828',
    },
    lastReadingsStatusContainer : {
        flexDirection : 'row',

    },
    lastReadingsStatus : {
        fontSize: 10,
        lineHeight: 16,
        color: '#8C8C8C',
        marginLeft : 8,
        marginRight : 12,
    },
    lastReadingsStatusWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    lastReadingsStatusCircle : {
        backgroundColor : 'green',
        borderRadius : 50,
        width: 6,
        height: 6,
    },
    green : {
        backgroundColor: '#6BC380',
    },
    red : {
        backgroundColor: '#D55D42',
    },
    orange : {
        backgroundColor: '#F29D38',
    }
});

export default LastReadings;