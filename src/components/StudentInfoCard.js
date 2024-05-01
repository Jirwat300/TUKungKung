import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StudentInfoCard = ({ studentData }) => {
    const navigation = useNavigation();

    const handleViewStudentCard = () => {
        navigation.navigate('ExamStudent');
    };

    return (
        <View style={styles.card}>
            <View style={styles.topSection}>
                <View style={styles.imageContainer}>
                    <Image
                        source={studentData.imageUri}
                        style={styles.studentImage}
                    />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.label}>ชื่อ-นามสกุล</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        value={studentData.name}
                        editable={false}
                    />
                    <Text style={styles.label}>คณะ/สาขา</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Faculty"
                        value={studentData.faculty}
                        editable={false}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleViewStudentCard}>
                        <Text style={styles.buttonText}>ดูบัตรนักศึกษา</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottomSection}>
                <View style={styles.infoBlock}>
                    <Text style={styles.infoTitle}>Student-ID</Text>
                    <Text style={styles.infoContent}>{studentData.studentId}</Text>
                </View>
                <View style={styles.infoBlock}>
                    <Text style={styles.infoTitle}>GPAX</Text>
                    <Text style={styles.infoContent}>{studentData.gpax}</Text>
                </View>
                <View style={styles.infoBlock}>
                    <Text style={styles.infoTitle}>หน่วยกิตสะสม</Text>
                    <Text style={styles.infoContent}>{studentData.credit}</Text>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: '#ececec',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        margin: 10,
    },
    topSection: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    imageContainer: {
        flex: 1, // Assigns half of the space to the image container
        justifyContent: 'center',
        alignItems: 'center',
    },
    studentImage: {
        width: 140, // Adjust the width as needed
        height: 140, // Adjust the height as needed
        borderRadius: 9999,
    },
    infoContainer: {
        flex: 1, // Assigns the other half of the space to the info container
        justifyContent: 'center',
    },
    label: {
        fontSize: 14,
        color: '#000',
        marginBottom: 5,
    },
    input: {
        fontSize: 16,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#d9d9d9',
        backgroundColor: '#d9d9d9',
        borderRadius: 9999,
        padding: 10,
    },
    button: {
        backgroundColor: '#edb47f',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#000000',
        fontSize: 14,
    },
    bottomSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        margin: 10,
        borderTopWidth: 1,
        borderTopColor: '#e1e1e1',
    },
    infoBlock: {
        alignItems: 'center',
    },
    infoTitle: {
        fontSize: 12,
        color: '#999999',
    },
    infoContent: {
        fontSize: 16,
        color: '#000',
    },
});

export default StudentInfoCard;