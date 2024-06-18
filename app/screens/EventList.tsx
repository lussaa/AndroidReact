import {NavigationProp} from "@react-navigation/native";
import {Button, Text, View} from "react-native";
import {FIREBASE_AUTH} from "../managers/FirebaseManager";
import { DB } from "../managers/FirebaseManager";
import firestore from '@react-native-firebase/firestore';
import { ReactNativeFirebase } from "@react-native-firebase/app";
import { set, ref, onValue, remove, update } from "firebase/database";
import { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import { doc, getDoc, DocumentSnapshot } from "firebase/firestore";


interface RouterProps {
    navigation: NavigationProp<any, any>
}

const EventList = ({navigation } : RouterProps) => {
    const [events, setEvents] =  useState<DocumentSnapshot | null>(null);
    
  //read

    useEffect(() => {
        async function getDataFromDb () {
            const docRef = doc(DB, "events", "30-05-24-marseille-001");
            const docSnap = await getDoc(docRef);
            setEvents(docSnap);
            console.log("Events:" + events?.data);
        }
        getDataFromDb();
    }, []);
    

    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Available Events</Text>
            <Text> Event {events?.get('name')}</Text>
        </View>
    );
};

export default EventList;