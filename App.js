import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <Text>God bless you! St Anthony Please pray for us</Text> */}
      {/* <StatusBar style="auto" /> */}
      <Header />
      <View style={styles.content}>
        {/* to form */}
        <View style>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => <Text>{item.text}</Text>}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
