import { View, Text, StyleSheet } from 'react-native';

export default function CartItemsScreen() {
  return (
    <View style={styles.container}>
      <Text>Cart Items</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
