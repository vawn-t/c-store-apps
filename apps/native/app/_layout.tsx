import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import LogRocket from '@logrocket/react-native';
import { StackNavigation } from '@navigation';
import { LOG_ROCKET_APP_ID } from '@repo/constants';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

const AppLayout = () => {
  const [loaded, error] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
  });

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

  return <StackNavigation />;
};

export default AppLayout;
