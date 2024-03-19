import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  itens: {
    flex:1,
    flexDirection: 'row',
    width:350,
    height:40,
    margin:15,
    justifyContent:'space-between'
  },
  container:{
      flex:1
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 100
  },
  titulo: {
    fontSize: 30
  },
  align_right:{
    flexDirection:'column',
    justifyContent: 'flex-end',
    alignItems:'flex-end'
  }
});

export default {styles}
