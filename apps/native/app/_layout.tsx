import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootSiblingParent } from 'react-native-root-siblings';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LogRocket from '@logrocket/react-native';

import { LOG_ROCKET_APP_ID } from '@repo/constants';
import { GlobalLoader, ToastProvider } from '@repo/ui';
import { useStore } from '@repo/stores';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

const RootLayout = () => {
  const [loaded, error] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
  });

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
        retry: 3,
      },
    },
  });

  const isLoading = useStore.use.isLoading();

  useEffect(() => {
    if (loaded) {
      LogRocket.identify(LOG_ROCKET_APP_ID, {
        loadFont: 'success',
      });

      SplashScreen.hideAsync();
    } else if (error) {
      console.error('Error loading fonts:', error.message);
    }
  }, [loaded, error]);

  useEffect(() => {
    LogRocket.init(LOG_ROCKET_APP_ID);
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <RootSiblingParent>
        <SafeAreaProvider>
          <ToastProvider>
            <Stack screenOptions={{ headerShown: false }}>
              <StatusBar style="auto" />

              <Stack.Screen name="index" />
              <Stack.Screen name="(auth)" />
              <Stack.Screen name="(post-auth)" />
            </Stack>

            {isLoading && <GlobalLoader />}
          </ToastProvider>
        </SafeAreaProvider>
      </RootSiblingParent>
    </QueryClientProvider>
  );
};

export default RootLayout;
