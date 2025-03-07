import { Stack } from 'expo-router';

import { colors } from '@repo/ui';
import { Header } from '@components';

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Welcome',
          headerTitleStyle: { color: colors.text.light },
          header: Header,
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          title: 'Login',
          headerTitleStyle: { color: colors.text.light },
          header: Header,
        }}
      />
      <Stack.Screen
        name="forgot-password"
        options={{
          title: 'Forgot Password',
          headerTitleStyle: { color: colors.text.dark },
          header: Header,
        }}
      />
      <Stack.Screen name="(signup)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;
