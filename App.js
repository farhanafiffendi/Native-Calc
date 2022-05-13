import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CalcTouch from './src/screens/CalcTouch';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CalcTouch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA0A0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
