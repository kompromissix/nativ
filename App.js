import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App(navigation) {
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
            <View style={styles.imgcontiner}>
              <View style={styles.imgrang}>
                <Image style={styles.img} source={require('./assets/alert.png')}/>
              </View>
              <View style={styles.imgrang2}>
                <Image style={styles.img2} source={require('./assets/Start.png')}/>
              </View>
              <View style={styles.imgrang}>
                <Image style={styles.img} source={require('./assets/Union.png')}/>
              </View>
            </View>
            <View style={styles.text_bottom_main}>
              <Text style={styles.text_bottom1}>Clean</Text>
              <Text style={styles.text_bottom2}>Enter device</Text>
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
    width: '100%',
    height: 'auto',
  },
  top_main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
    paddingTop: 30,
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
    flexDirection: 'column',
    width: 375,
    height: 214,
  },
  bottom: {
    width: 313,
    height: 149,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
  },
  imgrang:{
    width: 52,
    height: 52,
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDEBF7',
    borderRadius: 100,
    marginTop: 15
  },
  imgrang2:{
    width: 74,
    height: 74,
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
  },
  imgcontiner: {
    width: 313,
    height: 74,
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
  },
  text_bottom_main: {
    width: 313,
    height: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  text_bottom1:{
    fontSize: 16,
    color: '#92BEE0'
  },
  text_bottom2:{
    fontSize: 18,
    color: '#0380C9'
  }
});
 