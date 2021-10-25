import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const DeletePopup = ({popupOpener, deleteLastReadingsItem}) => {
    return (
        <View style={styles.popupWrapper}>
            <View style={styles.popupContainer}>
                <Text style={styles.popupTitle}>Вы уверены?</Text>
                <Text style={styles.popupInfo}>После удаления показания {'\n'} его нельзя будет восстановить</Text>
                <TouchableOpacity style={styles.delete} onPress={deleteLastReadingsItem}>
                    <Text style={styles.deleteText}>Удалить</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.cancel} onPress={popupOpener} title='press'>
                    <Text style={styles.cancelText}>Отмена</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
};

export default DeletePopup;

const styles = StyleSheet.create({
    popupWrapper : {
        position: 'absolute',
        top : 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor:  'rgba(40,40,40,0.6)',
        justifyContent: 'center',
        padding: 15,
    },
    popupContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    popupTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 25,
        color: '#282828',
        marginBottom: 16,
    },
    popupInfo: {
        fontSize: 12,
        lineHeight: 20,
        color: '#8C8C8C',
        marginBottom: 16,
        textAlign: 'center',
    },
    delete: {
        backgroundColor: '#282828',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        width: '100%',
        marginBottom: 10,
    },
    cancel: {
        borderWidth: 2,
        borderColor: '#606060',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        width: '100%',
    },
    deleteText: {
        color: '#FFF',
    },
    cancelText: {
        color: '#282828',
    }
});
