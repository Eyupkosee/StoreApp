import { Dimensions, StyleSheet } from "react-native";

const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    body_container:{},
    image:{
        width:Dimensions.get('window').width,
        height: Dimensions.get('window').height/3,
        resizeMode:'contain',
        backgroundColor:'white',
        marginBottom:10,
    },
    title:{
        color:'black',
        fontWeight:'bold',
        fontSize:26,
        textAlign:'center',
        marginBottom:10,
    },
    desc:{
        padding:8,
        color:'black',
        fontSize: 16,
        fontStyle:'italic',
        fontWeight:'400',
    },
    price:{
        textAlign:'right',
        color:'gray',
        fontSize:15,
        fontStyle:'italic',
        margin:10,
    },
})
export default styles;