'use client';

import { Image, View } from 'react-native';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

// Components
import { BackIcon, Button, colors, ProductInfo } from '@repo/ui';
import { LoadingIndicator } from '@repo/ui';

// Hooks
import { useProductDetail } from '@repo/hooks';

// Styles
import styles from './styles';

const ProductScreen = () => {
  const { id } = useParams();
  const router = useRouter();

  const { data } = useProductDetail(+id);

  return (
    <View style={styles.contain}>
      <Button
        onPress={() => router.back()}
        icon={<BackIcon color={colors.text.dark} />}
        style={{
          position: 'absolute',
          top: 15,
          left: 15,
          zIndex: 10,
        }}
      ></Button>
      <View style={styles.circle} />

      {!data ? (
        <LoadingIndicator />
      ) : (
        <>
          <Image
            alt="background"
            source={{ uri: data.image }}
            style={styles.image}
          />
          <ProductInfo
            id={data.id}
            price={data.price}
            name={data.name}
            productUnitId={data.productUnitId}
            description={data.description || ''}
          />
        </>
      )}
    </View>
  );
};

export default ProductScreen;
