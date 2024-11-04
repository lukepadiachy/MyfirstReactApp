import { FlatList } from 'react-native';
import items from '@/assets/data/items';
import ItemList from '@/src/components/ItemList';


export default function MenuScreen() {
  return (
    <FlatList 
      data={items} 
      renderItem={({ item }) => <ItemList item={item} />}
      numColumns={2}
      columnWrapperStyle={{gap: 10}}
      contentContainerStyle={{gap: 10 ,padding: 10}}
      
    

    />
  );
}



