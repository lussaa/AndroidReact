import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Login from "./app/screens/Login";
import {useEffect, useState} from "react";
import MyPage from "./app/screens/MyPage";
import EventList from "./app/screens/EventList";
import { onAuthStateChanged, User } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';



const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout(){
  return (
      <InsideStack.Navigator>
        <InsideStack.Screen name="eventList" component={EventList} />
        <InsideStack.Screen name="myPage" component={MyPage} />
      </InsideStack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState<User | null >(null);

  useEffect(() => {
      onAuthStateChanged(FIREBASE_AUTH, (user) => {
          setUser(user);
      })
  }, []);
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='eventList'>
          {(user?
              <Stack.Screen name="Inside" component={InsideLayout} options={{headerShown: false}}  /> :
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
