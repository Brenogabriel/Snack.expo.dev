import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/juliette.jpg')} /> 
     <Text style={styles.paragraph}>
     Para saber mais sobre a Juliette clique no botão abaixo:
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    backgroundColor: "#58f58c"
  },
  paragraph: {
    margin: 24,
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#f558b9"
  },
  logo: {
    height: 150,
    width: 200,
  }
});
