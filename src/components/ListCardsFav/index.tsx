import React from 'react'
import {View, FlatList, Linking, TouchableOpacity } from 'react-native';
import {User} from '../CardUsers/types/index'
import CardUser from '../CardUser'

const index = ({users}:{users:User[]}) => {

    const redirectToUrl = (url:string) =>{
        Linking.openURL(url)
    }
  return (
    <View>
        <FlatList data={users} keyExtractor={item => String(item.id)}
            renderItem={({item}) => 
            <TouchableOpacity onPress={() =>redirectToUrl(item.url)}>
                <CardUser  login={item.login} url={item.url} avatar_url={item.avatar_url} />           
            </TouchableOpacity>}/>
    </View>
  )
}
export default index