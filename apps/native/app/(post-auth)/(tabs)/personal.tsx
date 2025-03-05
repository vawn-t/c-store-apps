import { View, Text, StyleSheet } from 'react-native';

export default function PersonalScreen() {
  return (
    <View style={styles.container}>
      <Text>Personal</Text>
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
