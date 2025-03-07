import { useCallback, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import {
  Categories,
  colors,
  FeaturedProducts,
  SearchBar,
  useToast,
} from '@repo/ui';
import { Banners } from '@components';

// Stores
import { useStore } from '@repo/stores';

// Hooks
import { useProductUnitList, useCartItemList } from '@repo/hooks';

// Styles
import styles from './styles';
import { usePathname, useRouter } from 'expo-router';
import { APP_ROUTES } from '@repo/constants';

const Home = () => {
  const [userId, enableLoading, disableLoading, setProductUnits, setCartItems] =
    useStore((state) => [
      state.userId,
      state.enableLoading,
      state.disableLoading,
      state.setProductUnits,
      state.setCartItems,
    ]);
  const toast = useToast();

  if (!userId) {
    toast.show({ message: 'You are not authenticated!', type: 'error' });
    return;
  }

  const { data: productUnits, error: productUnitListError } =
    useProductUnitList();
  const { data: cartItemList, error: cartItemListError } =
    useCartItemList(userId);

  const route = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const isProductUnitListPending = !productUnits;
    const isCartItemListPending = !cartItemList;

    if (isProductUnitListPending) {
      enableLoading();
      return;
    } else {
      disableLoading();
    }

    let errors = [productUnitListError, cartItemListError];

    // Filter out errors
    errors = errors.filter((error) => error instanceof Error);

    if (!isProductUnitListPending && !isCartItemListPending) {
      setProductUnits(productUnits);
      setCartItems(cartItemList);
    } else if (errors?.length) {
      toast.show(errors[0]!.message);
    }
  }, [productUnits, productUnitListError, cartItemList, cartItemListError]);

  const handleNavigateToSearchScreen = useCallback(() => {
    if (!pathName.includes(APP_ROUTES.POST_AUTH_SEARCH)) {
      route.navigate(APP_ROUTES.POST_AUTH_SEARCH);
    }
  }, []);

  const handleNavigateToProductDetails = useCallback(() => {
    route.navigate(APP_ROUTES.POST_AUTH_DETAILS);
  }, []);

  return (
    <SafeAreaView edges={['right', 'left', 'top']} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container} nestedScrollEnabled>
        <SearchBar
          onNavigateToSearch={handleNavigateToSearchScreen}
          backgroundInputColor={colors.background.primary}
        />
        <Banners />
        <Categories />
        <FeaturedProducts
          onNavigateToDetails={handleNavigateToProductDetails}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
