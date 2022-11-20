
import { SafeAreaView,FlatList, ActivityIndicator} from "react-native";
import Config from 'react-native-config';


import ProductCard from "../Components/ProductCard/ProductCard";
import useFetch from "../hooks/useFetch";

function Products({navigation}){
    const {loading,data} = useFetch(Config.API_URL)

    const handleDeatil = (id) =>{navigation.navigate('Details',{id})}

    const renderProduct = ({item}) => <ProductCard product={item} onSelect={() => handleDeatil(item.id)}/>;

    if(loading){
        return <ActivityIndicator size='large' />
    }
    
    return(
        <SafeAreaView>
            <FlatList data={data} renderItem={renderProduct} />
        </SafeAreaView>
    )
}
export default Products;