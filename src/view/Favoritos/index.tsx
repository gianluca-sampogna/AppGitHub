import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import ListCardsFav from '../../components/ListCardsFav/index'
import LoginContext from '../../contexts/Login'
import SemFavoritos from '../../components/SemFavoritos/index'
import styles from './styles/index'

const Favoritos = () => {
  const {favoritos} = useContext(LoginContext)

  console.log('favoritos.length -', favoritos.length)
  
  return (
    <View style={styles.container}>
      {favoritos.length == 0 ? <SemFavoritos/> : <ListCardsFav users={favoritos}/>}
    </View>
  )
}
export default Favoritos
