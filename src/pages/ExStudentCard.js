import React from 'react';
import { StyleSheet, Image, SafeAreaView, StatusBar } from 'react-native';

const ExamStudent = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Image
                source={require('../../public/StudentCard.jpg')} // Replace with your image URL or local path
                style={styles.fullScreenImage}
                resizeMode="cover"
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fullScreenImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    }
});

export default ExamStudent;
