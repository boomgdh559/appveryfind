import React, { Component } from 'react';
import { ImageBackground, Text, View, Image, GradientButton } from 'react-native';
import { Button } from 'native-base';
import ResultsFound from './ResultsFound';
//import ResultsNotFound from './ResultsNotFound';


var img = require('../assets/verify1.png');

export default class ResultsNotFound extends Component {
    render() {
        return (
            //<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ImageBackground style={styles.ImageBackground}
                source={img}
            >
                <View style={styles.container}>
                </View>

                <View style={styles.container2}>
                </View>

                <View style={styles.container3}>
                    <Text style={styles.titleView}>Verification</Text>
                    <Text style={styles.textView}>results</Text>
                    <Image
                        source={require('../assets/notFound2.png')}
                        style={styles.img2}
                    >
                    </Image>
                    <View>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center', color: '#B10F00', fontSize: 36, paddingBottom: 10 }}>
                            Not Found</Text>
                        {/* <Text style={{ textAlign: 'center', color: '#B10F00', fontSize: 15, margin: 3 }}>
                            Degree of conferred : Bsc.IT
                        </Text> */}
                        {/* <Text style={{ textAlign: 'center', color: '#2A18A0', fontSize: 15, margin: 3 }}>
                            Date of  graduation : 11/07/2563
                        </Text>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center', color: '#2A18A0', fontSize: 15, margin: 7 }}>
                            GPA 3.50
                        </Text> */}
                    </View>
                </View>
            </ImageBackground>
            //</View>
        );
    }
}
const styles = {
    ImageBackground: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        //width: 375,
        //height: 82
    },
    container: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
        //flex: 0.6,
        width: 270,
        backgroundColor: 'white',
        alignItems: 'center',
        shadowColor: '#a9a9a9',
        shadowOpacity: 0.2,
        opacity: 0.3,
        height: 520,
        zIndex: 0,
        marginBottom: -580
    },
    container2: {
        borderRadius: 15,
        borderWidth: 6,
        borderColor: 'white',
        //flex: 1,
        width: 285,
        backgroundColor: 'white',
        alignItems: 'center',
        shadowColor: '#a9a9a9',
        shadowOpacity: 0.2,
        //marginBottom: 20,
        opacity: 0.5,
        Position: 'relative',
        height: 505,
        zIndex: 1,
        marginTop: 65
    },
    container3: {
        borderRadius: 15,
        borderWidth: 6,
        borderColor: 'white',
        width: 300,
        backgroundColor: 'white',
        alignItems: 'center',
        shadowColor: '#a9a9a9',
        shadowOpacity: 0.3,
        opacity: 1,
        Position: 'relative',
        height: 500,
        zIndex: 2,
        marginTop: -510
    },
    img2: {
        alignItems: 'center',
        margin: 40,
        // marginBottom: 40,
        width: 140,
        height: 140
    },
    titleView: {
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 24,
        color: '#2A18A0',
        fontWeight: 'bold'

    },
    textView: {
        paddingTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 18,
        color: '#2A18A0',
        marginBottom: 15

    },
    buttonStyles: {
        borderRadius: 30,
        borderColor: '#2A18A0',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#2A18A0',
        marginTop: 40,
        marginLeft: 12,
        paddingLeft: 45,
        paddingRight: 45,
    }
};