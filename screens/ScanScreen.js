import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class ScanScreen extends React.Component { 
    constructor(){
        super();
        this.state = {
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal',
        }
    }
    getCameraPermissions = async () =>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);

        this.setState({
            /*status === "granted" is true when user has granted permission
            status === "granted" is false when user has not granted the permission
            */
           hasCameraPermissions: status === "granted",
            buttonState: 'clicked',
          scanned: false
        });
    }
     handleBarCodeScanned = async({type, data}) => {
        this.setState({
          scanned: true,
          scannedData: data,
          buttonState: "normal"
        })
      }
    render() { 
      
      
      const hasCameraPermissions = this.state.hasCameraPermissions;
        const scanned = this.state.scanned;
        const buttonState = this.state.buttonState;
    
        if(buttonState === "clicked" && hasCameraPermissions) {
          return (
            <BarCodeScanner
              onBarCodeScanned = {scanned ? undefined : this.handleBarCodeScanned}
            />
          )
        }
    
        else if (buttonState === "normal") {
          return (
            <View style={styles.container}>
              <Text style={styles.displayText}>
                {hasCameraPermissions === true ? this.state.scannedData : "Request Camera Permissions"}
              </Text>
              <TouchableOpacity style = {styles.scanButton} onPress={this.getCameraPermissions}><Text style = {styles.buttonText}>
                Scan QR code</Text></TouchableOpacity>
            </View>
            );
            }
          }
}
 const styles = StyleSheet.create({
     
     scanButton: {
         backgroundColor: 'lightblue',
         padding: 10,
         margin: 10,
         marginTop:20
     }, 
     buttonText:{ fontSize: 20,textAlign:"center"},
     container: { flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"grey" }, 
     displayText:{ fontSize: 25, textDecorationLine: 'underline',marginTop:20 }
 })