import { Stack, useLocalSearchParams } from "expo-router"; // hook imported from router
import { View, Text } from "react-native"; // make sure this comes from react and not /../themed

const ItemDetailScreen = () => {

  const { id } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen options={{title: 'Details'}}/>

      <Text style={{fontSize: 20}}>ItemDetailScreen for id: {id}</Text>
    </View>
  );
};

export default ItemDetailScreen;

