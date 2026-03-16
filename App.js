import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container_main}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.top_main}>
          <View style={styles.top}>
            <View style={styles.top_top}>
              <Image source={require('./assets/Group.png')}/>
              <Image source={require('./assets/Group2.png')}/>
            </View>
            <View style={styles.top_center}>
              <Text style={styles.text_top}>Robot Cleaner</Text>
              <Text style={styles.text_bottom}>The bin is empty!</Text>
            </View>
            <Image style={styles.top_bottom_top} source={require('./assets/image3.png')}/>
            <Text style={styles.top_bottom_bottom}>Charging completed</Text>
          </View>
        </View>
        <View style={styles.bottom_main}>
          <View style={styles.bottom}>
            <View>

            </View>
            <View>
              <Text>Clean</Text>
              <Text>Enter device</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container_main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 812,
  },
  container: {
    display: 'flex',
    backgroundColor: '#EDF5FA',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 375,
    height: 812,
  },
  top_main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 375,
    height: 598,
    backgroundColor: '#0181CA',
    borderBottomEndRadius: '40px',
    borderBottomLeftRadius: '40px',

  },
  top:{
    width: 327,
    height: 550,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center'
  },
  top_top:{
    width: 327,
    height: 14,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  top_center:{
    width: 241,
    height: 49,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
  },
  text_top: {
    fontSize: 24,
    color: 'white',
  },
  text_bottom: {
    fontSize: 18,
    color: '#92BEE0',
  },
  top_bottom_bottom: {
    fontSize: 18,
    color: 'white',
  },
  bottom_main: {
    backgroundColor: '#EDF5FA',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 375,
    height: 214,
  },
  bottom: {
    width: 313,
    height: 149,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
 