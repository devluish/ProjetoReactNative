import React, { useState } from "react";
import { style } from "./style";
import Logo from '../../assets/logo.png';
import {MaterialIcons} from '@expo/vector-icons'

import {
    Text,
    View,
    Image,
    TextInput,
    Touchable,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native';
import { themas } from "../../global/themes";

export default function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassWord] = useState('');
    const [loading,setLoading] = useState(false)

    async function getLogin(){
        try {
            setLoading(true)
            if(!email || !password){
                return Alert.alert("Atenção, informe os campos obrigatorios!")
            }

            setTimeout(()=>{
                Alert.alert("Logado com sucesso!")
                setLoading(false)
            },3000)

            

        } catch (error) {
            console.log(error);
        }
        
    }


    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo!</Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <MaterialIcons
                    name='email'
                    size={20}
                    color={themas.colors.textColor}
                    />
                </View>
                <Text style={style.titleInput}>SENHA</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={password}
                        onChangeText={setPassWord}
                    />
                    <MaterialIcons
                    name='remove-red-eye'
                    size={20}
                    color={themas.colors.textColor}
                    />
                </View>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={() => getLogin()}>
                     {loading
                     ? <ActivityIndicator color={"#FFFF"} size={"small"} />
                    :
                     <Text style={style.textButton}>Entrar</Text>}
                </TouchableOpacity>           
            </View>
                <Text style={style.textRegister}>Não tem conta? <Text style={{color:themas.colors.secundary}} >Registre-se</Text></Text>
            </View>
    );
}
