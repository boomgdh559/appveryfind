import React, { Component } from "react";
// import MoreInformation from "./MoreInformation.css";
import {Text,ImageBackground,View,Image,} from "react-native";
import ResultsFound from "./ResultsFound";
import { LinearGradient } from "expo-linear-gradient";
import { Container, Header, Content, Card, CardItem, Body,  } from 'native-base';
import { HeaderBackButton } from "react-navigation-stack";

export default class MoreInformation extends React.Component {
  render() {
    const transcript = this.props.navigation.getParam('transcript', 'Not Found transcript');
    return (
      <View style={styles.background}>
        <ImageBackground
          source={require("../assets/Background3.png")}
          style={{
            flex: "1",
            width: "100%",
            height: "100%",
            justifyContent: "top"
          }}
        >
          <View style={styles.showName}>
            <LinearGradient
              colors={["#9B6AFE", "#839FFA", "#6AD7F6"]}
              style={styles.gradientName}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <View style={styles.showTextName}>
                <Text style={styles.textName}>{transcript.name}</Text>
              </View>
              <View style={styles.showTextName}>
                <Text style={styles.textGPA}>GPA.</Text>
                <Text style={styles.textGPA_result}>3.35</Text>
              </View>
            </LinearGradient>

            <View
                colors={"#fff"}
                style={styles.backgroundText}
                >
                <LinearGradient
                colors={["#9B6AFE", "#839FFA", "#6AD7F6"]}
                style={styles.gradientCousseNo}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                >
                    <View  style={styles.columnCouseNo}>  
                        <Text style={styles.columnText_couse}>COUSE NO.</Text>
                        <Text style={styles.columnText_subject}>SUBJECTS </Text>
                        <Text style={styles.columnText_grades}>GRADES </Text>
                    </View>
                </LinearGradient>         
            </View>
                <Text style={styles.semaster}>FIRST SEMASTER (2016)</Text>
            <Card style={styles.columnContainer}>
                <Card style={styles.columnContainer_line}>
                    <Text style={styles.columnText_couse2}>GEN 101</Text>
                    <Text style={styles.columnText_subject2}>Physical Education</Text>
                    <Text style={styles.columnText_grades2}>A</Text>
                </Card>
            </Card>
            <Card style={styles.columnContainer}>
                <Card style={styles.columnContainer_line}>
                    <Text style={styles.columnText_couse2}>GEN 101</Text>
                    <Text style={styles.columnText_subject2}>Learning and problem solving skills</Text>
                    <Text style={styles.columnText_grades2}>A</Text>
                </Card>
            </Card>
            <Card style={styles.columnContainer}>
                <Card style={styles.columnContainer_line}>
                    <Text style={styles.columnText_couse2}>INT 101</Text>
                    <Text style={styles.columnText_subject2}>Informaion Technology Fundamental</Text>
                    <Text style={styles.columnText_grades2}>A</Text>
                </Card>
            </Card>
            <Card style={styles.columnContainer}>
                <Card style={styles.columnContainer_line}>
                    <Text style={styles.columnText_couse2}>INT 102</Text>
                    <Text style={styles.columnText_subject2}>Computer Programming I</Text>
                    <Text style={styles.columnText_grades2}>C+</Text>
                </Card>
            </Card>

          </View>        
        </ImageBackground>
      </View>
    );
  }
}

const styles = {
  background: {
    flex: 1,
    // flexDirection: 'column',
    backgroundColor: "#f5f5f5"
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  showName: {
    flex: 1,
    flexDirection: "column",
    // alignItems: 'stretch',
    justifyContent: "top",
    alignSelf: "center",
    marginTop: 50
    // marginTop: -500
  },
  showTextName: {
    flex: 1,
    flexDirection: "row"
  },
  gradientName: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 5,
    alignItems: "center",
    borderRadius: 7,
    shadowColor: "#a9a9a9",
    shadowOpacity: 0.7,
    width: 342,
    height: 300,
    flex: 0.1
  },
  textName: {
    flexDirection: "row",
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    flex: 1
  },
    textGPA: {
        flexDirection: "row",
        backgroundColor: "transparent",
        alignContent: "flex-end",
        fontSize: 16,
        color: "#fff",
        textAlign: "right",
        flex: 1
    },
    textGPA_result: {
        flexDirection: "row",
        backgroundColor: "transparent",
        alignContent: "flex-end",
        fontSize: 16,
        textAlign: "center",
        color: "#fff",
        flex: 0.5
    },
  backgroundText: {
    flexDirection: "row",
    // paddingRight: 5,
    marginTop: 22,
    alignItems: "center",
    //borderRadius: 2,
    // width: 342,
    // height: 250,
    flex: 0.1
  },
  gradientCousseNo:{
    flexDirection: "row",
    paddingTop: 0,
    paddingRight: 1.5,
    paddingLeft: 1.5,
    alignItems: "center",
    borderRadius: 4,
    shadowColor: "#a9a9a9",
    shadowOpacity: 0.7,
    width: 142,
    height: 41,
    flex: 1
  },
    columnCouseNo: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 3,
        shadowOpacity: 0,
        backgroundColor: 'white',
        margin: 0
    },
        columnText_couse: {
            textAlign: "left",
            flexDirection: "row",
            color: "#4C64FF",
            // borderRadius: 30,
            zIndex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            flex: 1.5,
            // borderLeft: "red"
        },
        columnText_subject: {
            textAlign: "center",
            flexDirection: "row",
            color: "#4C64FF",
            borderColor: "#4C64FF",
            // borderRadius: 30,
            backgroundColor: "white",
            zIndex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            flex: 1.5
        },
        columnText_grades: {
            flexDirection: "row",
            textAlign: "right",
            color: "#4C64FF",
            borderColor: "#4C64FF",
            // borderRadius: 30,
            backgroundColor: "white",
            zIndex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            flex: 1.5
        },

    //semater
    semaster:{
        fontSize: 12,
        color: '#79B7F8',
        fontWeight: "bold",
        marginBottom:10,
    },
    //column result of INT, course tiltle ,grade
    columnContainer:{
        // flex: 1,
        flexDirection: "row",
        paddingLeft:6,
        // paddingRight: 8,
        // backgroundColor: "#fff",
        alignItems: "center",
        
        flex: 0.08,
        borderRadius: 2,
        
        borderColor: "transparent",
        shadowOpacity: 0

    },
    columnContainer_line:{
        flex: 6,
        flexDirection: "row",
        height: 42,
        alignItems: "center",
        // padding: 5,
        // borderRadius: 3,
        backgroundColor: "#fff",
        shadowOpacity: 0,
        margin: 0,
        borderColor: "transparent",
        borderStyle: 'solid',
        borderLeftColor:"#8991FB",
        borderRadius: 0,
        shadowOpacity: 0,
        borderLeftWidth: 3,
        
    },
    columnText_couse2:{
        textAlign: "left",
        flexDirection: "row",
        // backgroundColor: "#f1f1",
        color: "#604CBF",
        fontWeight: "bold",
        borderLeftColor: "#604CBF",
        borderStyle: 'solid',
        alignItems: "center",
        paddingLeft: 13,
        flex: 0.3,
    },
    columnText_subject2:{
        textAlign: "left",
        flexDirection: "row",
        // backgroundColor: "#f1f1",
        color: "#604CBF",
        // fontWeight: "bold",
        borderLeftColor: "#604CBF",
        borderStyle: 'solid',
        alignItems: "center",
        // paddingLeft: 5,
        flex: 0.6,
    },
    columnText_grades2: {
        textAlign: "center",
        flexDirection: "row",
        color: "#604CBF",
        borderLeftColor: "#604CBF",
        borderStyle: 'solid',
        alignItems: "center",
        flex: 0.1,
    }


};
