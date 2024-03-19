import React, { useState, useContext, useEffect } from 'react'
import { View, Image, Text } from 'react-native'
import { User } from '../CardUsers/types/index'
import styles from '../CardUser/styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginContext from '../../contexts/Login'

const Index = (usuario:User) => {
  const { isFavorite, addFavoritos, removeFavoritos, favoritos } = useContext(LoginContext)
  const [isFavorito, setIsFavorito] = useState<boolean>(false)

  useEffect(() => {
    setIsFavorito(isFavorite(usuario.login))

  }, [isFavorite, usuario.login])

  return (
    <View style={styles.itens}> 
      <Image style={styles.avatar} source={{uri: usuario.avatar_url}}/>
      <View style={styles.align_right}>
        <Text>{usuario.login}</Text>
        <Text>{usuario.url}</Text>
      </View>
      <Icon 
        name="heart" 
        size={24} 
        color={isFavorito ? '#FF0000' : '#a9a9a9'} 
        onPress={() => {
          if (isFavorito) {
            removeFavoritos(usuario.login)
          } else {
            addFavoritos(usuario.login, usuario.avatar_url, usuario.url, usuario.id)
          }
        }}
      />
    </View> 
  )
}

export default Index
