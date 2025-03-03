import { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Constants
import { ScreenNames, TabNames } from '@repo/constants';

// Screens
import { Cart, Favorite, Home, Personal } from '@screens';

// Components
import { CartIcon, colors, HeartIcon, HomeIcon, PersonalIcon } from '@repo/ui';

// Themes

// Types
import { RootStackParamList, TabParamList } from '@repo/constants';

const Tab = createBottomTabNavigator<TabParamList>();

const HomeStack = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, ScreenNames.HomeStack>
    >();

  const handleNavigateToCartScreen = useCallback(() => {
    navigation.navigate(ScreenNames.Cart);
  }, []);

  return (
    <Tab.Navigator
      initialRouteName={TabNames.Home}
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.background.primary,
          borderTopWidth: 0,
          paddingVertical: 20,
        },
      })}
    >
      <Tab.Screen
        name={TabNames.Home}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon color={focused ? '#040404' : undefined} />
          ),
        }}
      />
      <Tab.Screen
        name={TabNames.Personal}
        component={Personal}
        options={{
          tabBarIcon: ({ focused }) => (
            <PersonalIcon color={focused ? '#040404' : undefined} />
          ),
        }}
      />
      <Tab.Screen
        name={TabNames.Favorite}
        component={Favorite}
        options={{
          tabBarIcon: ({ focused }) => (
            <HeartIcon color={focused ? '#040404' : undefined} />
          ),
        }}
      />
      <Tab.Screen
        name={TabNames.Cart}
        component={Cart}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity
              style={styles.cart}
              onPress={handleNavigateToCartScreen}
            >
              <CartIcon />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  cart: {
    backgroundColor: colors.primary.dark,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    transform: [{ translateY: -20 }],
    borderWidth: 5,
    borderColor: colors.background.primary,
  },
});

export default HomeStack;
