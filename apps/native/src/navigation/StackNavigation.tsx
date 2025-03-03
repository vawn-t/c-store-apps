import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import {
  ProductDetail,
  Search,
  ForgotPassword,
  VerifyNumber,
  Cart,
} from '@screens';

// Constants
import { RootStackParamList, ScreenNames } from '@repo/constants';

// Types

// Stacks
import HomeStack from './HomeStack';
import OnboardingStack from './OnboardingStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => (
  <Stack.Navigator
    initialRouteName={ScreenNames.OnboardingStack}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      name={ScreenNames.OnboardingStack}
      component={OnboardingStack}
    />
    <Stack.Screen
      name={ScreenNames.ForgotPassword}
      component={ForgotPassword}
    />
    <Stack.Screen name={ScreenNames.HomeStack} component={HomeStack} />
    <Stack.Screen name={ScreenNames.ProductDetail} component={ProductDetail} />
    <Stack.Screen name={ScreenNames.search} component={Search} />
    <Stack.Screen name={ScreenNames.VerifyNumber} component={VerifyNumber} />
    <Stack.Screen name={ScreenNames.Cart} component={Cart} />
  </Stack.Navigator>
);

export default AppStack;
