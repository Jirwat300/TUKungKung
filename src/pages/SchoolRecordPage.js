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
        {records.map((record) => (
          <View key={record.id} style={styles.recordItem}>
            <Text style={styles.subjectText}>{record.subject}</Text>
            <Text style={styles.creditsText}>{record.credits} หน่วยกิต</Text>
            <View style={styles.gradeContainer}>
              <Text style={styles.gradeText}>{record.grade}</Text>
            </View>
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
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#2196F3', // Modern blue color
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  termText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 8,
  },
  recordList: {
    padding: 20,
  },
  recordItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f5f5f5', // Light gray background
    marginBottom: 12,
  },
  subjectText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  creditsText: {
    fontSize: 16,
    color: '#555',
  },
  gradeContainer: {
    backgroundColor: '#4CAF50', // Green color for grade
    padding: 8,
    borderRadius: 4,
    marginLeft: 12,
  },
  gradeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  totalCreditsContainer: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Light gray background
    borderRadius: 8,
    marginTop: 20,
  },
  totalCreditsText: {
    fontSize: 18,
    color: '#333',
  },
  totalGPAContainer: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#FFC107', // Yellow color for GPA
    borderRadius: 8,
    marginTop: 12,
  },
  totalGPAText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SchoolRecordPage;