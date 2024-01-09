import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(json => console.log(json))
  }, [])
  

  return (
    <SafeAreaView>
       <FlatList
        data={users.users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>Username: {item.username}</Text>
            <Text>Password: {item.password}</Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
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
