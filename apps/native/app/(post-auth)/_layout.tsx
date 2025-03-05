import { Stack } from 'expo-router';

export default function PostAuthLayout() {
  return (
    <Stack initialRouteName="(tabs)">
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="details" />
      <Stack.Screen name="search" />
    </Stack>
  );
}
