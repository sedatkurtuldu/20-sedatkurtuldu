import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getUsers } from '../services/api';


export default function HomeScreen() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then(response => {
      setUsers(response);
    }).catch(error => {
      console.error("Hata :" , error);
    })
  }, [])
  

  return (
    <SafeAreaView>
       <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>Username: {item.userName}</Text>
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
