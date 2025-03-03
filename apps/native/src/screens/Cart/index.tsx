import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import { EmptyCart, ShoppingCart } from '@repo/ui';
import Header from './Header';

// Stores
import { useStore } from '@repo/stores';

// Styles
import styles from './styles';

const Cart = () => {
  const cartItemIds = useStore.use.cartItemIds();

  return (
    <View style={styles.screenWrapper}>
      <SafeAreaView style={styles.container}>
        <Header />
        {cartItemIds.length ? (
          <ShoppingCart cartItemIds={cartItemIds} />
        ) : (
          <EmptyCart />
        )}
      </SafeAreaView>
    </View>
  );
};

export default Cart;
