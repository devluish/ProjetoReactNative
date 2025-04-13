import React from "react";
import { style } from "./style";
import Logo from '../../assets/logo.png';

import {
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

export default function Login() {
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
                <Text style={style.titleInput}>Endereço de E-mail</Text>
                <TextInput/>
                <Text>Senha</Text>
                <TextInput/>
            </View>
            <View style={style.boxBottom}>
                <Text>bottom</Text>
            </View>
        </View>
    );
}
