import React, { Component } from 'react';
import { Text, ImageBackground, View, Image } from 'react-native';
import ResultsFound from './ResultsFound';
import { LinearGradient } from 'expo';


export default class MoreInformation extends React.Component {
    render() {
        return (
            <View style={styles.background}>
                <ImageBackground
                    source={require('../assets/Background3.png')}
                    style={{ width: '100%', height: '100%' }}
                >
                    <View style={styles.showName}>
                        <LinearGradient
                            colors={['#9B6AFE', '#839FFA', '#6AD7F6']}
                            style={styles.gradientName}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.textName}>
                                Purich Sangprasert      GPA 3.50
                            </Text>
                        </LinearGradient>
                    </View>
                    <View
                        style={styles.columnContainer}>
                        <Text style={styles.columnText}>COUSE NO.        SUBJECTS     GRADES</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
const styles = {
    background: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    showName: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -500
    },
    gradientName: {
        padding: 20,
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: 'center',
        borderRadius: 7,
        shadowColor: '#a9a9a9',
        shadowOpacity: 0.5,
    },
    textName: {
        backgroundColor: 'transparent',
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold'
    },
    conlumnContainer: {
        margin: 500,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
        //width: 270,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    columnText: {
        textAlign: 'center',
        color: '#4C64FF',
        width: 295,
        padding: 10,
        //width: 200,
        borderColor: '#4C64FF',
        borderRadius: 30,
        backgroundColor: 'white',
        marginTop: -530,
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 40
    },
    

}