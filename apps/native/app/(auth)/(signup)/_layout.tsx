import { colors, Header } from '@repo/ui';
import { Stack, useRouter } from 'expo-router';

const SignUpLayout = () => {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Sign Up',
          headerTitleStyle: { color: colors.text.light },
          header: Header,
        }}
      />
      <Stack.Screen
        name="verify-code"
        options={{
          title: 'Verify Number',
          headerTitleStyle: { color: colors.text.dark },
          header: Header,
        }}
      />
    </Stack>
  );
};

export default SignUpLayout;
