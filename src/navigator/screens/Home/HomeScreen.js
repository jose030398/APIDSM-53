import * as React from 'react';
import {Text, View,StyleSheet} from 'react-native';


export default function HomeScreen(){

    return(
        <>
     <View style={[styles.container, {
      
      flexDirection: "column"}]}>
      
      <View style={{ flex: 1, backgroundColor: "red", justifyContent:"center",}}><Text>Slider</Text></View>
      
      <Text>V2-Base De Datos</Text>
      <View style={{flex:1, backgroundColor:"darkorange", justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POst-1</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POst-2</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POst-3</Text></View>
      </View>

      
      <Text>V3-Laravel</Text>
      <View style={{flex:1, backgroundColor:"gray", justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POST-4</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POST-5</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POST-6</Text></View>
      </View>
    </View>  
        </>
    )
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    }
    });

