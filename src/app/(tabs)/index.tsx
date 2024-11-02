import { View } from 'react-native';
import items from '@/assets/data/items';
import ItemList from '@/src/components/ItemList';

export default function MenuScreen() {
  return (
    <View>
     <ItemList item={items[6]} /> 
     <ItemList item={items[1]} /> 
    </View>
  );
}

