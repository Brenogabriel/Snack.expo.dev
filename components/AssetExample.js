import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/Seta.png')} />
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
  logo: {
    height: 100,
    width: 100,
  }
});
