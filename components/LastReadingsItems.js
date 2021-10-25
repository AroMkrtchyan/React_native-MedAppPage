import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const LastReadingsItems = ({popupOpener, data}) => {
    return (
        <View style={styles.lastReadingsItemContainer}>
            <View style={styles.lastReadingsItemHeader}>
                <View style={styles.lastReadingsItemDataWrapper}>
                    <View>
                        <Text style={styles.lastReadingsItemData}>{data.unit} ммоль/л</Text>
                    </View>
                    <View style={styles.lastReadingsItemUpDown}>
                        <View >
                            <Text ><AntDesign name="arrowup" size={12} color="black" /></Text>
                        </View>
                        <View>
                            <Text style={styles.lastReadingsItemUpDownText}>2.14</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={() => popupOpener(data.id)} >
                    <AntDesign name="delete" size={16} color="black" />
                </TouchableOpacity>
            </View>
            <View >
                <Text style={styles.lastReadingsItemContext}>
                    {data.info}
                </Text>
            </View>
            <View>
                <Text style={styles.lastReadingsItemDate}>{data.date}</Text>
            </View>
        </View>

    )
};

export default LastReadingsItems;

const styles = StyleSheet.create({
    lastReadingsItemContainer : {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 16,
    },
    lastReadingsItemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    lastReadingsItemDataWrapper : {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    lastReadingsItemUpDown : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 2,
        marginBottom : 9,
    },
    lastReadingsItemData : {
        fontSize: 16,
        lineHeight: 24,
        color: '#6BC480',
        marginRight: 16,
    },
    lastReadingsItemUpDownText : {
        fontSize: 12,
        lineHeight: 15,
        color: '#8C8C8C',
    },
    lastReadingsItemContext : {
        fontSize: 12,
        lineHeight: 20,
        color: '#282828',
        marginBottom: 9,
    },
    lastReadingsItemDate: {
        fontSize: 12,
        lineHeight: 20,
        color: '#8C8C8C',
    }
});