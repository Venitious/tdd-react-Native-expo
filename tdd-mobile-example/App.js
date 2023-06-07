import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Heading from './components/Heading';
import Board from './components/Board';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js start working on your app!</Text>
      <StatusBar style="auto" />
      <Board/>
      <Heading/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
