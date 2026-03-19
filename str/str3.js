import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Str3({navigation}) {
  return (
    <View style={styles.container_main}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.top_top}>
          <TouchableOpacity style={styles.but} onPress={() => navigation.navigate('Str1')}>
            <Image source={require('../assets/Group.png')}/>
          </TouchableOpacity>
          <Image source={require('../assets/Group2.png')}/>
        </View>
        <Text style={styles.h1}>Cleaning Details</Text>
        <View style={styles.map_container_main}>
            <View style={styles.map_container}>
                <View style={styles.text_time_container}>
                  <Text style={styles.time}>09:30</Text>
                  <Text style={styles.text_time}>Start Time</Text>
                </View>
                <Image source={require('../assets/map.png')}/>
                <View style={styles.group_main}>
                    <View style={styles.group_container}>
                        <View style={styles.group_container_one}>
                            <Image source={require('../assets/Group1.png')}/>
                        </View>
                        <View style={styles.group_container_one}>
                            <Image source={require('../assets/Group3.png')}/>
                        </View>
                    </View>
                    <Image source={require('../assets/Group4.png')}/>
                </View>
                <View style={styles.bottom_main}>
                  <View style={styles.bottom_main_container}>
                    <View style={styles.bottom_text}>
                      <View style={styles.bottom_text_m}>
                        <Text style={styles.text_bottom}>23.0</Text>
                        <Text style={styles.text_up}>m</Text>
                      </View>
                      <Text style={styles.green_text}>min</Text>
                    </View>
                    <View style={styles.hr}></View>
                    <View style={styles.bottom_text}>
                      <View style={[{justifyContent: 'flex-end'},, styles.bottom_text_ms]}>
                        <Text style={[{textAlign: 'right'}, styles.text_bottom]}>20</Text>
                        <Text style={[{textAlign: 'right'}, styles.text_up]}>min</Text>
                      </View>
                      <Text style={[{textAlign: 'right'}, styles.green_text]}>Cleaning Time</Text>
                    </View>
                  </View>
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
    height: '100%',
    backgroundColor: '#0C344E',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 362,
    height: 751,
  },
  top_top:{
    width: 327,
    height: 14,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingTop: 17
  },
  but:{
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingBottom: 40,
    paddingRight: 20
  },
  map_container_main:{
    width: 362,
    height: 660,
    backgroundColor: '#113D5A',
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map_container:{
    width: 320,
    height: 590,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  h1:{
    fontSize: 20,
    color: 'white'
  },
  time:{
    fontSize: 30,
    color: 'white'
  },
  text_time:{
    fontSize: 18,
    color: '#567C90',
    paddingTop: 17
  },
  text_time_container:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  group_main:{
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  group_container:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 57
  },
  group_container_one:{
    width: 25,
    height: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#0C344E'
  },
  bottom_main:{
    width: '100%',
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottom_main_container:{
    width: 237,
    height: 67,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  bottom_text:{
    width: 100,
    height: 67,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  bottom_text_m:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  text_bottom:{
    fontSize: 30,
    color: 'white',
  },
  text_up:{
    fontSize: 18,
    color: 'white',
  },
  green_text:{
    fontSize: 20,
    color: '#8199AC',
  },
  hr:{
    height: 61,
    width: 1,
    backgroundColor: '#285C7D'
  },
  bottom_text_ms:{
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexDirection: 'row'
  }
});
