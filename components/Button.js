import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ImageComponent = () => {
  return (
    <View style={styles.imageContainer}>
    </View>
  );
};

const ButtonComponent = () => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => alert('Você clicou no Botão. Parabéns!!!')}>
        <Text style={styles.buttonText}>Clique Aqui!!!</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <ImageComponent />
      <ButtonComponent />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#58f58c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
 
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#f760cf",
    padding: 10,
    borderRadius: 50,
  },
  buttonText: {
    color: "#58f58c",
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;