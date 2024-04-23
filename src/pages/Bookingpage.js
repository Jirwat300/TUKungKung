import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ScholarCard from '../components/ScholarCard'; // Ensure this path matches the location of your BookingCard component

// Example data for the booking options
const bookingOptions = [
  {
    id: 1,
    title: 'Booking Study Room',
    imageUrl: 'https://via.placeholder.com/150',
    onBook: () => console.log('Booked Study Room'),
  },
  {
    id: 2,
    title: 'Booking Court',
    imageUrl: 'https://via.placeholder.com/150',
    onBook: () => console.log('Booked Court'),
  }
];

const Bookingpage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {bookingOptions.map((scholar) => (
        <ScholarCard
          key={scholar.id}
          title={scholar.title}
          imageUrl={scholar.imageUrl}
          onBook={scholar.onBook}
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

export default Bookingpage;
