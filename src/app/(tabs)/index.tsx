import Colors from '@/src/constants/Colors';
import { StyleSheet, Text, View, Image } from 'react-native';
import items from '@/assets/data/items';

const item = items[1]

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
     <Text style={styles.title}>{item.name}</Text>
      <Image source={{uri: item.image}} style={styles.image} />
     <Text style={styles.subtitle}>Quantity : {item.quantity}</Text>
     <Text style={styles.subtitle}>Category : {item.category}</Text>
     <Text style={styles.subtitle}>Date Added : {item.addedAt.toDateString()}</Text>
     <Text style={styles.subtitle}>Date Updated : {item.updatedAt.toDateString()}</Text>
     <Text style={styles.subtitle}>Expiry Date : {item.expiryDate.toDateString()}</Text>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,

  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 20,
    color: Colors.light.tint,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  subtitle: {
    fontSize: 18,
    color: Colors.light.tint,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,


  },



});
