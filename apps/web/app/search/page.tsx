/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useCallback, useEffect } from 'react';
import { View } from 'react-native';

// Components
import {
  BackIcon,
  LoadingIndicator,
  HistorySearch,
  SearchBar,
  SearchResult,
} from '@repo/ui';

// Themes
import { colors } from '@repo/ui';

// Stores
import { useStore } from '@repo/stores';

// Hooks
import { useProductSearch } from '@repo/hooks';

// Styles
import { useRouter } from 'next/navigation';
import styles from './styles';

const SearchScreen = () => {
  const route = useRouter();

  // Stores
  const currentSearchValue = useStore.use.currentSearchValue();

  // Queries
  const {
    data: products,
    isSuccess,
    refetch,
  } = useProductSearch(currentSearchValue);

  useEffect(() => {
    if (currentSearchValue) {
      refetch();
    }
  }, [currentSearchValue]);

  const handleGoBack = useCallback(() => {
    route.back();
  }, []);

  return (
    <>
      <View style={styles.header}>
        <BackIcon color={colors.text.secondary} onPress={handleGoBack} />
        <SearchBar
          currentSearchValue={currentSearchValue}
          backgroundInputColor={colors.background.primary}
        />
      </View>
      <View style={styles.resultArea}>
        {currentSearchValue === '' ? (
          <HistorySearch />
        ) : isSuccess ? (
          <SearchResult results={products} />
        ) : (
          <LoadingIndicator />
        )}
      </View>
    </>
  );
};

export default SearchScreen;
