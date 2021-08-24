import React, { useState } from 'react'
import { View, StyleSheet, Text, Alert, TouchableOpacity, Array } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';

export default function app() {


  const frases = ["As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.",
    "Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.",
    "No meio da dificuldade encontra-se a oportunidade.",
    "Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.",
    "Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo."];

  const [sorte, setSorte] = useState(null);

  function frase() {


    const r = frases.length - 1;
    let i = Math.floor(Math.random() * r);
    setSorte(frases[i]);
  }

  return (
    <View style={styles.container}>

        <Text placeholderTextColor='#FFFFFF'></Text>
        <TouchableOpacity style={styles.botao} onPress={()=>frase()}>
          <FontAwesomeIcon icon={faCookieBite} color={'#009159'} size={50} />
        </TouchableOpacity>
          <View style={styles.sort}>
            <Text >{sorte}</Text>
          </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    backgroundColor: '#fffff2',
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
  },sort:{
    flex:1
  }

})

