import {Button, Text, View} from "react-native";
import {FIREBASE_AUTH} from "../managers/FirebaseManager";
import {NavigationProp} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyPage from "../screens/MyPage";
import EventList from "../screens/EventList";
import CreateEvent from "../screens/CreateEvent";

const BottomNavigation = () => {

    const Tab = createBottomTabNavigator();

    return(
        <View style={{flex:1}}>
             <Tab.Navigator initialRouteName="EventList" screenOptions={{
    tabBarStyle: { 
        backgroundColor: 'white',
        borderTopColor: 'red',
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: 'normal'
      },
  }}>
                <Tab.Screen name="Event List" component={EventList} options={{
          tabBarLabel: 'EventList',
        }} />
                <Tab.Screen name="Profile" component={MyPage} />
                <Tab.Screen name="Create event" component={CreateEvent} />
            </Tab.Navigator>

        </View>
    );
};

export default BottomNavigation;
