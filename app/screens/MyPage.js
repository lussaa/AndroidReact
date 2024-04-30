import {Button, Text, View} from "react-native";
import {FIREBASE_AUTH} from "../../FirebaseConfig";


function MyPage ({navigation}) {
    return(
      <View>
          <Text>My Page</Text>

          <Button title="My Page" onPress={() => navigation.navigate('myPage')}></Button>
          <Button title="Event List" onPress={() => navigation.navigate('eventList')}></Button>

          <Button title="Sign Out" onPress={() => FIREBASE_AUTH.signOut()}></Button>
      </View>
    );
}

export default MyPage;