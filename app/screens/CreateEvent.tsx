import {NavigationProp} from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { doc, setDoc } from "firebase/firestore";
import { DB } from "../managers/FirebaseManager";


interface RouterProps {
    navigation: NavigationProp<any, any>
}


const CreateEvent = ({navigation}: RouterProps ) => {

    const [eventName, setEventName] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventWebLink, setEventWebLink] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [maxPeople, setMaxPeople] = useState('');
    const [eventDateTime, setEventDateTime] = useState('');

     function saveEvent () {
        const documentReference = removeWhitespace(eventName) + Date.now();

        setDoc(doc(DB, "events", documentReference ), {
            eventName: eventName,
            eventLocation: eventLocation,
            eventWebLink: eventWebLink,
            eventDescription: eventDescription,
            maxPeople: maxPeople,
            eventDateTime: eventDateTime
            });
 
        
    }

    return (
        <View style={{padding: 10}}>

            <Text>Event name</Text>
            <TextInput style={styles.input}
                        placeholder="Event name" defaultValue="Useleesss tect" 
                        onChangeText={setEventName}> </TextInput>
            <Text>Location</Text>
            <TextInput style={styles.input}
                        placeholder="Event location" defaultValue="Galaxy bar 42" 
                        onChangeText={setEventLocation}> </TextInput>
            <Text>Web link of the event</Text>
            <TextInput style={styles.input}
                        onChangeText={setEventWebLink}> </TextInput>
            <Text>Event description</Text>
            <TextInput style={styles.inputBig}
                        placeholder="Event desctiption" defaultValue="" 
                        onChangeText={setEventDescription}> </TextInput>
            <Text>Event time & date</Text>

            <Button onPress={saveEvent} title="Save" color="#841584"></Button>
            
            
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    inputBig: {
        height: 120,
        margin: 12,
        borderWidth: 1,
        padding: 10,

    }
  });

  function removeWhitespace(text: string){
    return text.replace(/\s/g, "")
  }

export default CreateEvent;