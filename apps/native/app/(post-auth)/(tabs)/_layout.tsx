import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs initialRouteName="index">
      <Tabs.Screen name="index" />
      <Tabs.Screen name="personal" />
      <Tabs.Screen name="favorite" />
      <Tabs.Screen name="cart" />
    </Tabs>
  );
}
