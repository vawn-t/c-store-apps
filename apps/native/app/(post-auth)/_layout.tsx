import { Header } from '@components';
import { BackIcon, colors } from '@repo/ui';
import { Stack } from 'expo-router';

export default function PostAuthLayout() {
  return (
    <Stack initialRouteName="(tabs)" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="details" />
      <Stack.Screen name="search" />
      <Stack.Screen
        name="cart-items"
        options={{
          headerShown: true,
          title: 'Shopping Cart',
          header: Header,
          headerTitleStyle: { color: colors.text.secondary },
          headerStyle: { backgroundColor: colors.background.primary },
        }}
      />
    </Stack>
  );
}
