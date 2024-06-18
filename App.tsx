import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import Login from "./app/screens/Login";
import {useEffect, useState} from "react";
import BottomNavigation from "./app/components/BottomNavigation";
import { onAuthStateChanged, User } from 'firebase/auth';
import { FIREBASE_AUTH } from './app/managers/FirebaseManager';
import Test from './app/screens/Test';


const Stack = createNativeStackNavigator();


export default function App() {
  const [user, setUser] = useState<User | null >(null);

  useEffect(() => {
      onAuthStateChanged(FIREBASE_AUTH, (user) => {
          setUser(user);
      })
  }, []);
  return (
    <NavigationContainer>
        <Stack.Navigator >
          {(user?
              <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{headerShown: false}}  /> :
              <Stack.Screen name="Login" component={Login} options={{headerShown: false}}  />)}

        </Stack.Navigator>
    </NavigationContainer>
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
