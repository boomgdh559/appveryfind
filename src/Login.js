import React, { Component } from 'react';
import {
    StyleSheet, Text, View, ImageBackground, Image, Button, Alert, Modal, Dimensions, SafeAreaView, TextInput, KeyboardAvoidingView,
    TouchableOpacity, LayoutAnimation, StatusBar, Linking
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AsyncStorage } from 'react-native';

export default class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    SignIn = () => {
        if (this.state.password != "" && this.state.email != "") {
            var obj = {
                email: this.state.email,
                password: this.state.password
            }
            fetch('http://35.240.145.109/api/user/web/login', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            })
                .then(res => res.json())
                .then(async json => {

                    await AsyncStorage.setItem('token', json.authenData.token);
                    //var a = await AsyncStorage.getItem('token') เรียก token มาใช้งานด้วยวิธีนี้
                    //console.log(a)
                })
        } else {
            alert("กรอกข้อมูลก่อนนะคะ")
        }


    }

    render() {
        return (
            <ImageBackground source={require('../assets2/background_signIn.png')} style={styles.ImageBG}> 
                <KeyboardAvoidingView style={styles.LogoContainer} behavior="padding">
                    <Image source={require('../assets2/V-Bottom-Veryfine2.png')}
                        style={styles.VeryfineLogo} >
                    </Image>
                    <TextInput
                        placeholder={'USERNAME'}
                        placeholderTextColor="#387AF1"
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                        style={{ marginTop: '5%', borderBottomWidth: 1.75, borderBottomColor: '#D2E1FD', color: '#387AF1', fontSize: 16 }}
                    />
                    <TextInput
                        secureTextEntry={true}
                        placeholder={'PASSWORD'}
                        placeholderTextColor="#387AF1"
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                        style={{ marginTop: '8%', borderBottomWidth: 1.75, borderBottomColor: '#D2E1FD', color: '#387AF1', fontSize: 16 }}
                    />
                    <Text style={{ marginTop: '5%', textAlign: 'right', color: '#387AF1' }}>fogot your password?</Text>

                    <View style={styles.buttonScanQR}>
                        <LinearGradient
                            colors={['#6AD7F6', '#839FFA', '#9B6AFE']}
                            style={{ borderRadius: 16.5, marginTop: '10%' }}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Button onPress={() => this.SignIn()}
                                title="SING IN"
                                color='#FFFFFF'>
                            </Button>
                        </LinearGradient>

                    </View>
                    <Text style={{ textAlign: 'center', justifyContent: 'flex-end', flexDirection: 'row' }}>Don't have an account? 
                    <Text style={{ textAlign: 'right', color: '#387AF1', fontWeight: '500' }}> SIGN UP</Text></Text>
                    <View style={{ height: 100 }} />
                </KeyboardAvoidingView>

            </ImageBackground>

        );
    }
}


const styles = StyleSheet.create({
    ImageBG: {
        flex: 1,
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column"
    },
    LogoContainer: {
    },
    VeryfineLogo: {
        height: 200,
        width: 145,
        transform: [{ scale: 0.9 }],
        marginTop: 130,
        marginLeft: 60,
        marginRight: 60

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


});

