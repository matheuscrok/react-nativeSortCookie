import React, {useState} from 'react'
import {View,StyleSheet,Text,Alert,TouchableOpacity,Array} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';

export default function app(){

  
  var frases=["oi", "ola tudo bem?", "boa tarde", "boa noite", "bom dia"];
  
  
  function frase(){


    const r = frases.length-1;
    let i= Math.floor(Math.random()*r);
    Alert.alert(''+frases[i]);
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
      
    <Text placeholderTextColor='#FFFFFF'></Text>
    <TouchableOpacity  style={styles.botao} onPress={frase}>
    <FontAwesomeIcon icon={ faCookieBite} color={ '#009159'} size={50}/>
    </TouchableOpacity>
      </View>
    </View>
  );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 32,
      backgroundColor: '#fffff2'
    }, botao: {
      width: 65,
      height: 65,
      borderWidth: 2,
      borderColor: '#009159',
      borderRadius: 10
    }, btnArea: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },

  })

