import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const SchoolRecordPage = () => {
  // Dummy data for school records
  const records = [
    { id: '1', subject: 'TU 100', credits: '3', grade: 'A' },
    { id: '2', subject: 'TU 101', credits: '3', grade: 'A' },
    { id: '3', subject: 'TU 102', credits: '3', grade: 'A' },
    { id: '4', subject: 'TU 103', credits: '3', grade: 'A' },
    { id: '5', subject: 'TU 104', credits: '3', grade: 'A' },
    { id: '6', subject: 'TU 105', credits: '3', grade: 'A' },
    { id: '7', subject: 'SF 221', credits: '3', grade: 'A' },
    // ... more records
  ];

  // Dummy total credits and GPA values
  const totalCredits = 21;
  const totalGPA = 4.00;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ผลการเรียน</Text>
        <Text style={styles.termText}>ภาคเรียน 1/2567</Text>
      </View>
      <View style={styles.recordList}>
        {records.map(record => (
          <View key={record.id} style={styles.recordItem}>
            <Text style={styles.subjectText}>{record.subject}</Text>
            <Text style={styles.creditsText}>{record.credits} หน่วยกิต</Text>
            <Text style={styles.gradeText}>{record.grade}</Text>
          </View>
        ))}
        <View style={styles.totalCreditsContainer}>
          <Text style={styles.totalCreditsText}>หน่วยกิตรวม: {totalCredits}</Text>
        </View>
        <View style={styles.totalGPAContainer}>
          <Text style={styles.totalGPAText}>GPA รวม: {totalGPA.toFixed(2)}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  termText: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
  recordList: {
    padding: 10,
  },
  recordItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  subjectText: {
    fontSize: 16,
    color: '#333',
  },
  creditsText: {
    fontSize: 16,
    color: '#555',
  },
  gradeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  totalCreditsContainer: {
    padding: 10,
    alignItems: 'center',
  },
  totalCreditsText: {
    fontSize: 16,
    color: '#555',
  },
  totalGPAContainer: {
    padding: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  totalGPAText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SchoolRecordPage;
