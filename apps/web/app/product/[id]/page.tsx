'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';

// Components
import { ProductInfo } from '@repo/ui';
import { LoadingIndicator } from '@repo/ui';

// Hooks
import { useProductDetail } from '@repo/hooks';

import { PostAuthLayout } from '@layouts';

// Styles
import styles from './styles.module.css';

const ProductScreen = () => {
  const { id } = useParams();

  const { data } = useProductDetail(+id);

  return (
    <PostAuthLayout>
      {!data ? (
        <LoadingIndicator />
      ) : (
        <>
          <div className={styles.imgWrapper}>
            <Image alt={data.name} src={data.image} fill objectFit="contain" />
          </div>
          <ProductInfo
            id={data.id}
            price={data.price}
            name={data.name}
            productUnitId={data.productUnitId}
            description={data.description || ''}
          />
        </>
      )}
    </PostAuthLayout>
  );
};

export default ProductScreen;
