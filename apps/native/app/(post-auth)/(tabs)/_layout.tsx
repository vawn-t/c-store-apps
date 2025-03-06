import { useCallback } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { APP_ROUTES } from '@repo/constants';
import { CartIcon, colors, HeartIcon, HomeIcon, PersonalIcon } from '@repo/ui';
import { Tabs, useRouter } from 'expo-router';

export default function TabLayout() {
  const route = useRouter();

  const handleNavigateToCartScreen = useCallback(() => {
    route.navigate(APP_ROUTES.POST_AUTH_CART_ITEMS);
  }, []);

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 10,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon color={focused ? '#040404' : undefined} />
          ),
        }}
      />
      <Tabs.Screen
        name="personal"
        options={{
          tabBarIcon: ({ focused }) => (
            <PersonalIcon color={focused ? '#040404' : undefined} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          tabBarIcon: ({ focused }) => (
            <HeartIcon color={focused ? '#040404' : undefined} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          // href: null,
          tabBarIcon: () => (
            <TouchableOpacity
              style={styles.cart}
              onPress={handleNavigateToCartScreen}
            >
              <CartIcon />
            </TouchableOpacity>
          ),
        }}
        listeners={{
          // Prevent default tab navigation when pressing the tab
          tabPress: (e) => {
            e.preventDefault();
            handleNavigateToCartScreen();
          },
        }}
      />
    </Tabs>
  );
}

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
