import {NavigationProp} from "@react-navigation/native";
import { View, Text } from "react-native";

interface RouterProps {
    navigation: NavigationProp<any, any>
}


const CreateEvent = ({navigation}: RouterProps ) => {

    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
           
            <Text>Create an event</Text>
            
            
        </View>
    )
};

export default CreateEvent;