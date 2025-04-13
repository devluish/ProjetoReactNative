import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:20,
        backgroundColor: themas.colors.primary
    },
    boxTop:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center'

    },

    boxMid:{
        height:Dimensions.get('window').height/4,
        width:'100%',
        paddingHorizontal:37

    },

    boxBottom:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        alignItems:'center',
    
    },

    logo:{
        width:170,
        height:170

    },

    text:{
        fontWeight:'bold',
        color: 'white',
        marginTop:40,
        fontSize:23

    },
    titleInput:{
        marginLeft:5,
        color:themas.colors.textColor,
        marginTop:20

    },
    boxInput:{
        width:'100%',
        height:40,
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection:'row', //Usando o flexD para organizar o boxInput e colocar o icon ao lado da View
        alignItems:'center',
        paddingHorizontal:5,
        backgroundColor:themas.colors.white,
        borderColor:themas.colors.textColor
    },
    input:{
        height:'100%',
        width:'90%',
        borderRadius:40,
        paddingLeft:5
    },
    button:{
        width:250,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:themas.colors.secundary,
        borderRadius:40,
        shadowColor: themas.colors.secundary,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        
        elevation: 10,
        
        
    },
    textButton:{
        fontSize:16,
        color:'#FFFF',
        fontWeight:'bold'
    },
    textRegister:{
        fontSize:16,
        color:themas.colors.textColor

    },
    
    

})
