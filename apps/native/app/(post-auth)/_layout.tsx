import { Stack } from 'expo-router';

export default function PostAuthLayout() {
  return (
    <Stack initialRouteName="(tabs)" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="details" />
      <Stack.Screen name="search" />
      <Stack.Screen name="cart-items" />
    </Stack>
  );
}
