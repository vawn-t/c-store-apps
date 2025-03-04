import { Header } from '@repo/ui';
import { Stack, useRouter } from 'expo-router';
import { useCallback } from 'react';

const SignUpLayout = () => {
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
      <Stack.Screen name="login" />
      <Stack.Screen name="verify-code" />
    </Stack>
  );
};

export default SignUpLayout;
