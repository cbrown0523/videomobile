import React, { useState, useEffect } from "react";
import {ImageBackground,StyleSheet,Text,View,SafeAreaView,Button,ScrollView,contentContainerStyle,Linking,Modal,Dimensions} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { WebView } from 'react-native-webview';
//icon
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const App = () => {
    const [dimensions, setDimensions] = useState({ window, screen });
    const [mode, setMode] = useState("portrait");
    const [modalVisible, setModalVisible] = useState(false);
    const [playing, setPlaying] = useState(false);
 
    const image = {
     uri:
"https://www.html.am/templates/downloads/bryantsmith/anoceanofsky/anoceanofsky.jpg"    };
    const modeMaker = () => {
        if (dimensions.screen.width > dimensions.screen.height) {
          setMode("landscape") 
          
        } else {
          setMode("portrait") 
         
        }
        console.log(mode, playing)
        setPlaying(false)
       };
    
     const onChange = ({ window, screen }) => {
         setDimensions({ window, screen });
       };
    
     useEffect(() => {
         Dimensions.addEventListener("change", onChange);
    
         return () => {
           Dimensions.removeEventListener("change", onChange),
          modeMaker();
         };
    
       });
       return (
    
        <SafeAreaView style={styles.container}>
          <View style={styles.linkcenter}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              ><View style={styles.linkcenter2}>
                <Text style={mode === "portrait" ? styles.links : styles.links2} onPress={() => Linking.openURL(google.com)}>Home</Text>
                </View>
                <View style={styles.linkcenter2}>
                <Text style={mode === "portrait" ? styles.links : styles.links2} onPress={() => setModalVisible(true)}>Play Video</Text>
                </View>
                <View style={styles.linkcenter2}>
                <Text style={mode === "portrait" ? styles.links : styles.links2} onPress={() => Linking.openURL('google.com')}>About</Text>
                </View>
                <View style={styles.linkcenter2}>
                <Text style={mode === "portrait" ? styles.links : styles.links2} onPress={() => Linking.openURL('google.com')}>Porfolio</Text>
                </View>
                <View style={styles.linkcenter2}>
                <Text style={mode === "portrait" ? styles.links : styles.links2} onPress={() => Linking.openURL('google.com')}>Design</Text>
                </View>
                <View style={styles.linkcenter2}>
                <Text style={mode === "portrait" ? styles.links : styles.links2} onPress={() => Linking.openURL('google.com')}>Contact</Text>
                </View>
              </ScrollView>
            </View>
        <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        supportedOrientations={['landscape']} 
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
            <View style={styles.video2}>
        <WebView
        source={{html: '<iframe width="100%" height="100%" src="https://youtu.be/pvaHMhpvIqk?list=PLlmqcqVGwKLb0GNRU7ZtibnDyVcno-Vs4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
     />
        </View>
        
        </View>
      </Modal>
    
    
        {mode === "portrait" ? <View style={styles.imagecontainer}>
        <ImageBackground source={image} style={styles.image}>
        <Icon name="play" color="white" size={100} onPress={() => setModalVisible(true)} />
        </ImageBackground>
      
        </View> : null}
        <View style={mode === "portrait" ? styles.imagecontainer2 : styles.imagecontainer3}>

        </View>
        <ScrollView style={styles.text}>
          <View style={styles.innertext}>
            <Text style={styles.heading}>
            The Title of an Article
            </Text>
            <Text style={styles.text2}>
            You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :)
            </Text>
           <Text style={styles.text2}>
           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.            </Text>
            <Text style={styles.text2}>
            Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.
            </Text>
            <Text style={styles.heading2}>So Many Titles, So Little Time.
            </Text>
            <Text style={styles.text2}>
            You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :)


            </Text>
            <Text style={styles.text2}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.


            </Text>
            <Text style={styles.text2}>
            Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.


            </Text>
            <Text style={styles.heading2}>Yet Another One!
            </Text>
            <Text style={styles.text2}>
            You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :)


            </Text>
            <Text style={styles.text2}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.


            </Text>
            <Text style={styles.text2}>
            Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.


            </Text>
            <Text style={styles.heading2}>More Information</Text>
            <Text style={styles.text2}>
              I decided to leave the content portion open for the templates users
              to do as they wish with a blank canvas. I don't like to restrict my
              users too much, and for this reason I leave the defining of any
              content related styles to you.
            </Text>
            
          </View>
        </ScrollView>
      </SafeAreaView>
       );
     }
     const styles = ScaledSheet.create({
         container : {
        width: '100@s', // = scale(100)
        height: '200@vs', // = verticalScale(200)
        padding: '2@msr', // = Math.round(moderateScale(2))
        margin: 5
    },
    row: {
        padding: '10@ms0.3', // = moderateScale(10, 0.3)
        width: '50@ms', // = moderateScale(50)
        height: '30@mvs0.3' // = moderateVerticalScale(30, 0.3)
    },
    
          imagecontainer: {
            justifyContent: "flex-start",
            flex: 0.4,
            width: "90%",
            backgroundColor: "grey",
            marginTop: 0,
          },
          image: {
            width: "100%",
            
            height: "100%",
            resizeMode: "stretch",
            justifyContent: "center",
            alignItems: "center"
                     
          },
    
    
          image2: {
            width: "100%",
            marginLeft: "5@s",
            marginRight: "5@s",
            height: "100%",
          },
          imagecontainer2: {
            alignItems: "center",
            flex: 0.1,
            width: "90%",
           
          },
          imagecontainer3: {
            alignItems: "center",
            flex: 0.2,
            width: "90%",
          },
          text: {
            flex: 0.8,
            width: "90%",
            backgroundColor: "white",
          },
          innertext: {
            margin: "10@s",
          },
          links: {
            color: "white",
            fontWeight: "bold",
            marginRight: "25@s",
            marginLeft: "15@s",
            fontSize: "10@s",
          },
          links2: {
            color: "white",
            fontWeight: "bold",
            marginRight: "25@s",
            marginLeft: "15@s",
            fontSize: "14@s",
          },
        
          heading2: {
            color: "black",
            fontWeight: "700",
            fontSize: "18@s",
            marginTop: "20@s",
          },
        
          heading: {
            color: "black",
            fontWeight: "bold",
            marginBottom: "5@s",
            fontSize: "18@s",
          },
          text2: {
            color: "black",
            fontSize: "15@s",
          },
        
          linkcenter2: {
            height: "100%",
            justifyContent: "center",
          },
          buttonClose: {
            backgroundColor: "#1345A2",
          },
          textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
          },
          button: {
            padding: 10,
            elevation: 2,
            marginBottom:20,
          },
    
          centeredView: {
            flexDirection: "column",
            flex: 1,
            width: "100%",
            backgroundColor: "black",
            marginTop: -8,
            alignItems: "center",
            height: "200%",
          },
        
          video2: {
            flex:1,
            width: "105%",
            backgroundColor: "black",
    
          },
    
     });
     export default App; 