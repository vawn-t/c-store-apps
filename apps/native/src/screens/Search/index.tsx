import { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

// Components
import { BackIcon } from '@repo/ui';
import { HistorySearch, SearchBar, SearchResult } from '@repo/ui';
import { LoadingIndicator } from '@repo/ui';

// Themes
import { colors } from '@repo/ui';

// Stores
import { useStore } from '@repo/stores';

// Hooks
import { useProductSearch } from '@repo/hooks';

// Styles
import styles from './styles';

const Search = () => {
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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackIcon color={colors.text.secondary} onPress={handleGoBack} />
        <SearchBar
          currentSearchValue={currentSearchValue}
          inputColor={colors.background.dark}
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
    </SafeAreaView>
  );
};

export default Search;
