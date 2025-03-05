import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Types

// Screens
import { FirstTimeLogin, Login, Onboarding, SignUp } from '@screens';

// Constants
import { OnboardingStackParamList, ScreenNames } from '@repo/constants';

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName={ScreenNames.Onboarding}
  >
    <Stack.Screen name={ScreenNames.Onboarding} component={Onboarding} />
    <Stack.Screen
      name={ScreenNames.FirstTimeLogin}
      component={FirstTimeLogin}
    />
    <Stack.Screen name={ScreenNames.Login} component={Login} />
    <Stack.Screen name={ScreenNames.SignUp} component={SignUp} />
  </Stack.Navigator>
);

export default OnboardingStack;
