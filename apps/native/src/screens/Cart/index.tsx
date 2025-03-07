import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import { EmptyCart } from '@repo/ui';
import { ShoppingCart } from '@components';

// Stores
import { useStore } from '@repo/stores';

// Styles
import styles from './styles';

const Cart = () => {
  const cartItemIds = useStore.use.cartItemIds();

  return (
    <View style={styles.screenWrapper}>
      <SafeAreaView style={styles.container}>
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
