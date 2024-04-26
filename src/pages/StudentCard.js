// src/pages/StudentCardPage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StudentCardPage = () => {
    return (
        <View style={styles.container}>
            <Text>Student Card Information</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default StudentCardPage;
