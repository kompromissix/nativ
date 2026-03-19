import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Switch } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { useState } from 'react';


export default function Str2({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabledtwo, setIsEnabledtwo] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitchtwo = () => setIsEnabledtwo(previousState => !previousState);
  return (
    <View style={styles.container_main}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.back_container}>
          <TouchableOpacity style={styles.but} onPress={() => navigation.navigate('Str1')}>
            <Image style={styles.back} source={require('../assets/back.png')} />
          </TouchableOpacity>
        </View>

        <Text style={styles.text_settings}>Settings</Text>
        <View style={styles.container_opt}>
          <View style={styles.opt_container}>
            <View style={styles.absolute_container}>
              <View style={styles.absolute}></View>
            </View>
            <View style={styles.opt}>
              <Text style={styles.text_left_opt}>Name</Text>
              <Text style={styles.text_right_opt}>Enter name here</Text>
            </View>
          </View>
          <View style={styles.opt_container}>
            <View style={styles.absolute_container}>
              <View style={styles.absolute}></View>
            </View>
            <View style={styles.opt}>
              <Text style={styles.text_left_opt}>Time</Text>
              <View style={styles.text_container_right}>
                <Text style={[{paddingRight: 17}, styles.text_right_opt]}>09:30</Text>
                <Image source={require('../assets/Vector.png')}/>
              </View>
            </View>
          </View>
          <View style={styles.opt_container}>
            <View style={styles.absolute_container}>
              <View style={styles.absolute}></View>
            </View>
            <View style={styles.opt}>
              <Text style={styles.text_left_opt}>Repeat</Text>
              <View style={styles.text_container_right}>
                <Text style={[{paddingRight: 17}, styles.text_right_opt]}>Mo</Text>
                <Image source={require('../assets/Vector.png')}/>
              </View>
            </View>
          </View>
          <View style={styles.opt_container}>
            <View style={styles.absolute_container}>
              <View style={styles.absolute}></View>
            </View>
            <View style={styles.opt}>
              <Text style={styles.text_left_opt}>Area size</Text>
              <View style={styles.text_container_right}>
                <Text style={[{paddingRight: 17}, styles.text_right_opt]}>23.0 m</Text>
                <Image source={require('../assets/Vector.png')}/>
              </View>
            </View>
          </View>
          <View style={styles.opt_container}>
            <View style={styles.absolute_container}>
              <View style={styles.absolute}></View>
            </View>
            <View style={styles.opt}>
              <Text style={styles.text_left_opt}>Cleaning pattern</Text>
              <View style={styles.text_container_right}>
                <Text style={[{paddingRight: 17}, styles.text_right_opt]}>Combine modes</Text>
                <Image source={require('../assets/Vector.png')}/>
              </View>
            </View>
          </View>
          <View style={styles.opt_container}>
            <View style={styles.absolute_container}>
              <View style={styles.absolute}></View>
            </View>
            <View style={styles.opt}>
              <Text style={styles.text_left_opt}>Turbo</Text>
                <Switch
                 trackColor={{ false: '#CED7E0', true: '#1674C1' }}
                 onValueChange={toggleSwitch}
                 value={isEnabled}
                />
            </View>
          </View>
          <View style={styles.opt_container}>
            <View style={styles.absolute_container}>
              <View style={styles.absolute}></View>
            </View>
            <View style={styles.opt}>
              <Text style={styles.text_left_opt}>Dry wipe</Text>
                <Switch
                  trackColor={{ false: '#CED7E0', true: '#1674C1' }}
                  onValueChange={toggleSwitchtwo}
                  value={isEnabledtwo}
                />
            </View>
          </View>
        </View>
        <View style={styles.opt_bottom}>
          <Text style={styles.text_opt_bottom}>Discard Schedule</Text>
          <View style={styles.opt_bottom_button}>
            <Text style={styles.text_opt_bottom_button}>Save schedule</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container_main: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 327,
    height: 800,
    paddingTop: 30
  },
  back_container:{
    width: '100%',
    height: 13,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row', 
    alignItems: 'center',
    paddingTop: 50,
  },
  text_settings:{
    fontSize: 24,
    color: '#074364'
  },
  container_opt:{
    width: 327,
    height: 458,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
  },
  opt_bottom:{
    width: 327,
    height: 120,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column'
  },
  text_opt_bottom:{
    color: '#1674C1',
    fontSize: 20,
  },
  opt_bottom_button:{
    width: 327,
    height: 65,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1674C1',
    borderRadius: 10,
  },
  text_opt_bottom_button:{
    fontSize: 20,
    color: 'white'
  },
  opt_container:{
    width: 327,
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#EDF5FA'
  },
  absolute_container:{
    width: '100%',
    height: 58,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
  },
  absolute:{
    width: 3,
    height: 58,
    backgroundColor: '#DDEBF7'
  },
  opt:{
    width: '100%',
    height: 58,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 32,
    paddingRight: 22
  },
  text_left_opt: {
    fontSize: 18,
    color: '#B1CFE1',
    width: 80
  },
  text_right_opt:{
    fontSize: 18,
    color: '#1674C1'
  },
  text_container_right:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  but:{
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingRight: 27
  }
});