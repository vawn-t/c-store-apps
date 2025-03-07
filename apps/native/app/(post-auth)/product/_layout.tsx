import { Stack } from 'expo-router';
import { Header } from '@components';
import { colors } from '@repo/ui';

export default function ProductLayout() {
  return (
    <Stack initialRouteName="[id]">
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          header: Header,
          headerTitleStyle: { color: colors.text.secondary },
        }}
      />
    </Stack>
  );
}
