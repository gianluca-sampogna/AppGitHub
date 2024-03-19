import React from 'react'
import {View, FlatList, Linking, TouchableOpacity, Text } from 'react-native';
import styles from './styles/index';
import Icon from 'react-native-vector-icons/FontAwesome';

const index = () => {

  return (
    <View style={styles.container}>
        <Text style={styles.texth1}>Parece que você anda não tem seguidores aqui.</Text>
        <Text style={styles.text}>Não se preocupe, todos os grandes líderes começaram com zero seguidores, então você está em boa companhia!</Text>
        <Text style={styles.text}>Continue sendo você mesmo e quem sabe logo você terá uma legião de seguidores admirando sua grandeza!</Text>

        <Icon name="heart" size={80} color={'#FF0000'} />
    </View>
  )
}
export default index

