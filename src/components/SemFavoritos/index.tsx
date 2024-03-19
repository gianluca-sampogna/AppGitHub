import React from 'react'
import {View, Text } from 'react-native';
import styles from './styles/index';


const index = () => {

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Você ainda não tem nenhum favorito</Text>
        <Text style={styles.text}>Curta usuários apertando no ❤️ para favoritar</Text>
    </View>
  )
}
export default index

