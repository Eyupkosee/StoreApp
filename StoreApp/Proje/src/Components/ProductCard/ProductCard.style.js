import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
container:{
    flexDirection:'row',
    borderWidth:1,
    borderColor: 'gray',
    margin:8,
},
image:{
    width:100,
    minHeight:100,
    resizeMode:'contain',
    backgroundColor:'white',
},
body_container:{
    padding:8,
    flex:1,
    justifyContent:'space-between'
},
title:{
    color:'black',
    fontSize:18,
    fontWeight:'bold',
},
price:{
    textAlign:'right',
    fontSize:16,
    fontStyle:'italic',
    color:'black',
},
})

export default styles;