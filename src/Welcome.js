import React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';

//var background = require('./assets/Welcom3.png')
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.background}>
        <ImageBackground
          source={require('../assets/Welcome4.png')}
          style={{ width: '100%', height: '100%' }}
        >
          <View style={styles.image}>
            <Image
              source={require('../assets/APP-LOGO.png')}
              style={styles.image2}
            >
            </Image>
          </View>
        </ImageBackground>

      </View>
      //<View style = {styles.image}>

      //</View>
    );
  }
}

const styles = {
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // width: '100%',
    // height: '100%'
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    // width: '5%',
    // height: '5%',
    flex: 1
  },
  image2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 350,
    flex: 0.40
  }
};
