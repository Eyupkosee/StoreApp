import React from "react";
import { View,Text,ActivityIndicator,Image} from "react-native";

import useFetch from '../../hooks/useFetch';
import Config from "react-native-config";
import styles from './Detail.style';

function Details({route}){
    const {id} = route.params;
    const{loading,data} = useFetch(`${Config.API_URL}/${id}`);
    
    if(loading){
        return <ActivityIndicator size='large' />
    }

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:data.image}} />
            <View style={styles.body_container}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.desc}>{data.description}</Text>
            <Text style={styles.price}>{data.price}$</Text>
            </View>
        </View>
    )
}
export default Details;