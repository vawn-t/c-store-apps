import { Header } from '@repo/ui';
import { Stack, useRouter } from 'expo-router';
import { useCallback } from 'react';

const AuthLayout = () => {
  const router = useRouter();

  const handleGoBack = useCallback(() => {
    router.canGoBack() && router.back();
  }, []);

  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          header: () => <Header title="Welcome" onGoBack={handleGoBack} />,
        }}
      />
      <Stack.Screen name="login" />
      <Stack.Screen name="(signup)" />
    </Stack>
  );
};

export default AuthLayout;
