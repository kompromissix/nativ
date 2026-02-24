import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.top}>
        <View>
          <View>
            <Image source={require('./assets/Group.png')}/>
            <Image source={require('./assets/Group2.png')}/>
          </View>
          <View>
            <Text>Robot Cleaner</Text>
            <Text>The bin is empty!</Text>
          </View>
          <Image source={require('./assets/image3.png')}/>
          <Text>Charging completed</Text>
        </View>
      </View>
      <View>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF5FA',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 375,
    height: 812,
  },
  top: {
    flex: 1,
    width: 375,
    height: 598,
    backgroundColor: '#fff',
  },
  bottom: {

  }
});
