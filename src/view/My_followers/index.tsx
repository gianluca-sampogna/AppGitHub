import React, {useEffect, useState, useContext} from 'react'
import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import CardUsers from '../../components/CardUsers'
import {User} from './types/index.t'
import Input from '../../components/Input'
import styles from './styles/index';
import LoginContext from '../../contexts/Login'
import SemFollowers from '../../components/SemFollowers'

const My_followers = () => {
  const [listFollows, setListFollows] = useState<User[]>([])
  const [listFollowsCopia, setListFollowsCopia] = useState<User[]>([])
  const [listFollowsFiltrada, setListFollowsFiltrada] = useState<User[]>([])
  const [textFilter, setTextFilter] = useState<string>()
  const { nameGitHub } = useContext(LoginContext)
  
  useEffect(() => {
     fetchListaDefollows()
}, [])

  //Retorna uma lista de usuários de acordo com o filtro
  useEffect(() => {
    if(listFollows.length > 0){
      const list = [...listFollows];
      setListFollowsCopia(list)
      setListFollowsFiltrada(filtrarListaFollows(listFollows, textFilter))
    }
  }, [listFollows])

  useEffect(()=>{
    if(listFollowsCopia.length> 0){
      setListFollowsFiltrada(filtrarListaFollows(listFollows, textFilter));
    }
  }, [textFilter])

  const filtrarListaFollows = (listFollows:User[], textFilter:string): User[] =>{
      const caracteres = textFilter==undefined ? textFilter : textFilter.toLocaleLowerCase();      
      const regex = new RegExp(caracteres);
      const listaFiltrada = listFollows.filter((item) => regex.test(item.login.toLocaleLowerCase()));
      return listaFiltrada
  }

  const fetchListaDefollows = async() =>{
    await fetch(`https://api.github.com/users/${nameGitHub}/followers`)
    .then(response => response.json()) 
    .then(data => {
      const dadosTratados = data.map((perfil, index)=> {
        return {
          login: perfil.login, 
          avatar_url: perfil.avatar_url,
          url: perfil.html_url,
          id: index
        }
      })
      setListFollows(dadosTratados)
    })
  }

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <View style={styles.total}>
        {listFollows.length == 0? <></>: <Input textFilter={textFilter} handleChangeText={setTextFilter}></Input>}
        {listFollows.length == 0? <SemFollowers />: <CardUsers users={listFollowsFiltrada}/>}
      </View>
    </TouchableWithoutFeedback>

  )
}

export default My_followers;
