import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ImageBackground, Image, Button, Alert, Modal, Dimensions, SafeAreaView,
  TouchableOpacity, LayoutAnimation, StatusBar, Linking
} from 'react-native';
import ResultsFound from './ResultsFound';
import ResultsNotFound from './ResultsNotFound';
import { LinearGradient } from 'expo-linear-gradient';
import { RNCamera } from 'react-native-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';
import { web3, transcript } from './Connection';


export default class Scan extends Component {
  onSuccess(e) {
    Linking.openURL(e.data).catch(err => console.error('An error occured', err));
  }

  constructor() {
    super();
    this.state = {
      modalVisible: false,
    }
    state = {
      hasCameraPermission: false,
      lastScannedUrl: null,
      type: RNCamera.Constants.Type.back,
    };
  }
  componentDidMount() {
    this._requestCameraPermission();
  };

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };


  _handleBarCodeRead = result => {
    if (result.data !== this.state.lastScannedUrl) {
      LayoutAnimation.spring();
      this.setState({ lastScannedUrl: result.data });
    }
  };

  isValidate = async (address) => {
    await transcript.showTranscript(address.toString(), (error, result) => {
      if (result[0] == 0) {
        this.props.navigation.replace('ResultsNotFound');
        //console.log("Error");
      } else {
        this.props.navigation.replace('ResultsFound', {
          stdId: result[0],
          stdName: result[1],
          stdDegree: result[2],
          stdDate: result[3],
          stdGPA: result[4]
        });
        //console.log("Data : " + result[0]);
      }
    });
  }

  render() {
    return (
      //<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImageBackground source={require('../assets2/Background4.png')} style={styles.container} >
        <SafeAreaView style={styles.header}>

          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <SafeAreaView style={{ marginTop: 22 }}>

              <View>
                <Button bordered onPress={() => { this.setState({ modalVisible: true }) }}
                  onPress={() => { this.props.navigation.navigate('ScanQRCode') }}
                  block={true}
                  title="< Back"
                  style={styles.buttonStyles}
                >

                </Button>
                <Text style={styles.topic}>Scan QR code</Text>
                {/* <BarCodeScanner  onRead = {( e ) => alert ( e.data )}/> */}
                {this.state.hasCameraPermission === null
                  ? <Text>Requesting for camera permission</Text>
                  : this.state.hasCameraPermission === false
                    ? <Text style={{ color: '#fff' }}>
                      Camera permission is not granted
                </Text>
                    : <BarCodeScanner
                      onBarCodeRead={this._handleBarCodeRead}
                      style={{
                        height: Dimensions.get('window').height,
                        width: Dimensions.get('window').width,
                      }}
                    />}

                {this._maybeRenderUrl()}

              </View>
            </SafeAreaView>
          </Modal>

          <LinearGradient
            colors={['#9B6AFE', '#839FFA', '#6AD7F6']}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}>
            <Image source={require('../assets2/menuLine.png')}
              style={styles.MenuLineImage} >
            </Image>
            <Text style={styles.nameText}>Mattana Thanuwong</Text>
            <Text style={styles.positionText}>HR | SIT Company</Text>
            {/* <View style={styles.positionText}>
              <Text>HR</Text>
              <Text> | </Text>
              <Text>SIT Company</Text>
            </View> */}

          </LinearGradient>
        </SafeAreaView >

        <View style={styles.QRofTranscriptBox}>
          <Text style={styles.QrTranscriptText}>QR Code of Transcript</Text>
          <Image source={require('../assets2/TranscriptExam.png')}
            style={styles.TranscriptImage} >
          </Image>

          <View style={styles.buttonScanQR}>
            <LinearGradient
              colors={['#6AD7F6', '#839FFA', '#9B6AFE']}
              style={{ flex: 1 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Button onPress={() => { this.setState({ modalVisible: true }) }}
                title="Scan QR Code"
                color='#FFFFFF'>
              </Button>
            </LinearGradient>

          </View>

        </View>
      </ImageBackground>
      //</View>

    );
  }

  _handlePressUrl = () => {
    Alert.alert(
      'Open this URL?',
      this.state.lastScannedUrl,
      [
        {
          text: 'Yes',
          onPress: () => Linking.openURL(this.state.lastScannedUrl),
        },
        { text: 'No', onPress: () => { } },
      ],
      { cancellable: false }
    );
  };

  _handlePressCancel = () => {
    this.setState({ lastScannedUrl: null });
  };

  _maybeRenderUrl = () => {
    if (!this.state.lastScannedUrl) {
      return;
    }

    return (
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.url} onPress={this._handlePressUrl}>
          <Text numberOfLines={1} style={styles.urlText}>
            {this.state.lastScannedUrl}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={this._handlePressCancel}>
          <Text style={styles.cancelButtonText}>
            Cancel
        </Text>
        </TouchableOpacity>
      </View>
    );
  };
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    height: 95,
    width: '100%',
    top: 30,
    left: 0,
    position: 'absolute',
    shadowRadius: 100,
    borderRadius: 9,

  },
  nameText: {
    fontSize: 14,
    color: '#FFFFFF',
    position: 'absolute',
    height: 23,
    right: 15,
    top: 25,
    fontWeight: 'bold',
  },
  positionText: {
    fontSize: 12,
    color: '#FFFFFF',
    height: 20,
    left: 250,
    top: 15
    // flexDirection: 'column',
    // alignContent: 'center'

  },
  MenuLineImage: {
    height: 32,
    width: 32,
    left: 15,
    top: 30,
    alignItems: 'center',
    justifyContent: 'center',

  },
  QRofTranscriptBox: {
    position: 'absolute',
    width: 283,
    height: 439,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3, },
  },

  QrTranscriptText: {
    fontSize: 18,
    color: '#6753C2',
    position: 'absolute',
    height: 23,
    top: 15,
    fontWeight: 'bold',
  },

  TranscriptImage: {
    height: 274,
    width: 202,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonScanQR: {
    position: 'absolute',
    width: 188,
    height: 33,
    top: 385,
    fontWeight: 'bold',
    fontSize: 18,
    borderRadius: 16,
    shadowOpacity: 0.09,
    shadowRadius: 1,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3, },
    //borderRadius: 30
  },
  topic: {
    fontWeight: 'bold',
    fontSize: 18,

  },
  buttonStyles: {
    borderRadius: 30,
    borderColor: '#2A18A0',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#2A18A0',
  },
  cancelButtonText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 18,
    top: 100,
    alignItems: 'center',
    justifyContent: 'center',

  },


});
