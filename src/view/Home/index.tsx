import React, {useState, useEffect, useContext} from 'react'
import { View, Image, TextInput, Button, Platform, Alert, KeyboardAvoidingView, Keyboard, SafeAreaView, LayoutAnimation, LayoutAnimationConfig } from 'react-native'
import styles from './styles/index'
import LoginContext from '../../contexts/Login'

const Home = ({navigation}) => {
    const [nameGitHub, setNameGitHub] = useState<string|null>('')
    const [keyBoardIsOpen, setKeyBoardIsOpen] = useState<boolean>();
    const loginContext = useContext(LoginContext)

    const animacaoCostomizada:LayoutAnimationConfig = {
      duration: 1000,
      create: {
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 0.7
      }
    }

    useEffect(() => {
      // Configurando a animação inicial de layout para spring
      LayoutAnimation.configureNext(animacaoCostomizada);
    }, []);



    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
        setKeyBoardIsOpen(true);
      });
      const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
        setKeyBoardIsOpen(false);
      });
    
      return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
      };
    }, []);
    

     const limparInput = ()=>{
         setNameGitHub('')
     }
     
    const existThisGithub = async (nameGitHub: string): Promise<boolean> => {
        const response = await fetch(`https://api.github.com/users/${nameGitHub}/followers`);
        const data = await response.json();
        if (data?.message === 'Not Found') {
          limparInput();
          return false;
        }else{
          limparInput();
          loginContext.setNameGitHub(nameGitHub)
          loginContext.setAuth(true)
          return true;
        }};

  return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardAvoidingView}>  
            <Image style={styles.img}source={{uri:'https://cdn-icons-png.flaticon.com/512/25/25231.png'}}/>
            <View style={(keyBoardIsOpen)?{marginBottom: 10}:{marginBottom: 100}}>   
                    <TextInput 
                        style={styles.input}
                        onChangeText={setNameGitHub}
                        value={nameGitHub}
                        placeholder="Nome do GitHub"
                        keyboardType="default"
                        autoCorrect={true}/>       
                <View style={styles.button}>
                <Button
                    title="Pesquisar"
                    onPress={async () => { await existThisGithub(nameGitHub) ? console.log('Deu certo') : Alert.alert('Usuário não encontrado', 'Digite uma opção válida')}  }/>
                </View>
            </View>
         </KeyboardAvoidingView>
      </SafeAreaView>

  )
}



export default Home
