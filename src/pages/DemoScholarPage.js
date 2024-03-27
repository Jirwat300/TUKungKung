import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ScholarCard from '../components/ScholarCard'; // Adjust the import path as necessary

// Example data for the scholar cards
const scholarData = [
  {
    id: 1,
    title: 'SCG',
    imageUrl: 'https://via.placeholder.com/150',
    onApply: () => console.log('Applied to Scholarship A'),
  },
  {
    id: 2,
    title: 'Smartclick',
    imageUrl: 'https://via.placeholder.com/150',
    onApply: () => console.log('Applied to Scholarship B'),
  },
  {
    id: 3,
    title: 'Lazada',
    imageUrl: 'https://via.placeholder.com/150',
    onApply: () => console.log('Applied to Scholarship B'),
  },
  // Add more items as needed
];

const DemoScholarPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {scholarData.map((scholar) => (
        <ScholarCard
          key={scholar.id}
          title={scholar.title}
          imageUrl={scholar.imageUrl}
          onApply={scholar.onApply}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default DemoScholarPage;
