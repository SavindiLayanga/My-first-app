import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const App = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://example.com/your-image-url.jpg' }} // Replace with your image URL or require('./path-to-image.jpg') for local image
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Find your road ..." />
          <TextInput style={styles.input} placeholder="Find your road ..." />
          <TextInput style={styles.input} placeholder="Find your road ..." />
          <TextInput style={styles.input} placeholder="Find your road ..." />
          <TextInput style={styles.input} placeholder="Find your road ..." />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="train schedule" onPress={() => {}} />
          <Button title="Ticket Prices" onPress={() => {}} />
          <Button title="Seat Reservation" onPress={() => {}} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
    opacity: 0.8,
  },
  buttonContainer: {
    marginBottom: 10,
  },
});

export default App;
