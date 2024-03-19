import React, { useState } from 'react'
import { View, TextInput} from 'react-native'
import styles from './styles/index';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props{
    textFilter:string;
    handleChangeText: (text:string) => void;
}

const index:React.FC<Props> = ({textFilter, handleChangeText}) => {
  const [cor, setCor] = useState('#000')

  const brilhaIconSearch = () => {
    if (textFilter == undefined){
      textFilter = '';
    }

    if(textFilter.length > 0){
      setCor('#4169E1');
      //console.log('Mudei para cor azul, length - ', textFilter.length, ' - ', textFilter)
    }else{
      setCor('#000');
      //console.log('Mudei para cor preta, length - ', textFilter.length, ' - ', textFilter)
    }

  };

  return (
      <View>
      <TextInput
        style={styles.input}
        value={textFilter}
        placeholder="Pesquisar"
        keyboardType="default"
        onChangeText={(e) => {
          handleChangeText(String(e.toString()));
          brilhaIconSearch();
          }}
      />
      <Icon name="search" size={24} color={cor} style={styles.icon} />
    </View>
  )
}

export default index
