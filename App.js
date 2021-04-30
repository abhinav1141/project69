import React from 'react';
import { View,Image } from 'react-native';
import ScanScreen from "./screens/ScanScreen";

export default class App extends React.Component {
  render() {
  return (
    <View>
    <Image
    source={{uri:"https://content.instructables.com/ORIG/FAY/ENCA/J76GCZR8/FAYENCAJ76GCZR8.jpg?auto=webp&frame=1&width=320&md=392f0a01a2ce49bed41bab362cefdc9e"}}
    />
      <ScanScreen/>
    </View>
  );
  }
}