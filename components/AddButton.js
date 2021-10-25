import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

const AddButton = () => {
    return (
        <TouchableOpacity onPress={() => {}} style={styles.addButton}>
            <Text style={styles.addButtonIcon}>+</Text>
        </TouchableOpacity>
    )
};

export default AddButton;

const styles = StyleSheet.create({
    addButton : {
        height : 56,
        borderRadius : 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        marginBottom: 16,
    },
    addButtonIcon : {
        fontSize: 20,
        color: '#282828',

    }
});