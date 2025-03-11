'use client';

import { Categories, colors, FeaturedProducts, SearchBar } from '@repo/ui';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { ScrollView } from 'react-native';

import styles from './styles';

const HomeScreen = () => {
  const route = useRouter();
  const pathname = usePathname();

  const handleNavigateToProductDetails = useCallback((id: number) => {
    console.log('handleNavigateToProductDetails', id);

    route.push(`/product/${id}`);
  }, []);

  const handleNavigateToSearchScreen = useCallback(() => {
    if (!pathname.includes('search')) {
      route.push('/search');
    }
  }, [pathname]);

  return (
    <ScrollView contentContainerStyle={styles.container} nestedScrollEnabled>
      <SearchBar
        onNavigateToSearch={handleNavigateToSearchScreen}
        backgroundInputColor={colors.background.primary}
      />

      <Categories />
      <FeaturedProducts onNavigateToDetails={handleNavigateToProductDetails} />
    </ScrollView>
  );
};

export default HomeScreen;
