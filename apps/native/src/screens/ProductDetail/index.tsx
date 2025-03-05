import { RouteProp, useRoute } from '@react-navigation/native';
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

type ProductDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  ScreenNames.ProductDetail
>;

const ProductDetail = () => {
  const route = useRoute<ProductDetailScreenRouteProp>();

  const { data } = useProductDetail(route.params.id);

  return (
    <View style={styles.background}>
      <SafeAreaView edges={['left', 'right', 'top']} style={styles.container}>
        <View style={styles.circle} />
        <Header isDarkText />
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
