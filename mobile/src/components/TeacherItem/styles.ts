import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        
        backgroundColor:'#FFF',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius:8,
        overflow: 'hidden',
        padding:10,
        marginBottom:8
        
        
    },    
    profile:{
        flexDirection:'row',
        alignItems:'center',
        padding:24,
        paddingTop:10,

    },

    avatar:{
        width: 64,
        height:64,
        borderRadius:32,
        backgroundColor:'#eee'

    },
    profileInfo:{
        marginLeft: 16,

    },
    name:{
        fontFamily: 'Archivo_700Bold',
        color: '#32264d',
        fontSize:20,
    },
    subject:{
        fontFamily: 'Poppins_400Regular',
        color:'#6a6180',
        fontSize:12,
        marginTop:4
    },
    bio:{
        marginHorizontal:12,
        fontFamily: 'Poppins_400Regular',
        color:'#6a6180',
        fontSize:14,
        lineHeight:24
    },
    footer:{
        backgroundColor:'#fafafc',
        padding:24,
        alignItems:'center',
        marginTop:24,
    },
    price:{
        fontFamily:'Poppins_400Regular',
        fontSize:14,

    },
    priceValue:{
        fontFamily:'Archivo_700Bold',
        color:'#8257e5',
        fontSize:16,

    },
    buttonsContainer:{
        flexDirection:'row',
        marginTop:16,
    },
    favoriteButton:{
        width:56,
        height:56,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        marginRight:8,
        backgroundColor: '#8257e5',
    },
    favorited:{
        backgroundColor: '#e33d3d'
    },
    contactButton:{
        flex:1,
        flexDirection:'row',
        height:56,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        marginRight:8,
        backgroundColor: '#04d361',
    },
    contactButtonText:{
        color:'#FFF',
        fontFamily:'Archivo_700Bold',
        marginLeft:16,
        fontSize:16
    }
   
});

export default styles;