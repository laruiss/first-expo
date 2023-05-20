import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

const apiUrl = 'http://192.168.0.37:3000/api/' // Remplacer avec la bonne IP

export default function App() {
  const [data, setData] = useState('')
  const getData = async () => {
    try {
      const {msg} = await fetch(apiUrl).then(res => res.json())
      setData(msg)
    } catch (err) {
      setData(err.message)
    }
  }
  getData()
  return (
    <View style={styles.container}>
      <Text>Voici ce qui vient de l’API distante :</Text>
      <Text>{data}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
