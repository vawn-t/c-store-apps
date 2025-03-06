import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Constants
import { ScreenNames } from '@repo/constants';

// Types
import { RootStackParamList } from '@repo/constants';

// Components
import { ProductInfo, Header } from '@repo/ui';
import { LoadingIndicator } from '@repo/ui';

// Hooks
import { useProductDetail } from '@repo/hooks';

// Styles
import styles from './styles';

const ProductDetail = () => {
  const paramId = 1;
  const { data } = useProductDetail(paramId);

  return (
    <View style={styles.background}>
      <SafeAreaView edges={['left', 'right', 'top']} style={styles.container}>
        <View style={styles.circle} />

        {!data ? (
          <LoadingIndicator />
        ) : (
          <>
            <Image source={{ uri: data.image }} style={styles.image} />
            <ProductInfo
              id={data.id}
              price={data.price}
              name={data.name}
              productUnitId={data.productUnitId}
              description={data.description || ''}
            />
          </>
        )}
      </SafeAreaView>
    </View>
  );
};

export default ProductDetail;
