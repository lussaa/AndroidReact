import {NavigationProp} from "@react-navigation/native";
import {Button, Text, View} from "react-native";
import {FIREBASE_AUTH} from "../../FirebaseConfig";


interface RouterProps {
    navigation: NavigationProp<any, any>
}

const EventList = ({navigation } : RouterProps) => {


    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Button title="My Page" onPress={() => navigation.navigate('myPage')}></Button>
            <Button title="Event List" onPress={() => navigation.navigate('eventList')}></Button>

            <Button title="Sign Out" onPress={() => FIREBASE_AUTH.signOut()}></Button>
            <Text>Available Events</Text>
        </View>
    );
};

export default EventList;