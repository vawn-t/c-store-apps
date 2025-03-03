import { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Components
import { BackIcon } from '@repo/ui';
import { HistorySearch, SearchBar, SearchResult } from '@repo/ui';
import { LoadingIndicator } from '@repo/ui';

// Themes
import { colors } from '@repo/ui';

// Types
import { RootStackParamList } from '@repo/constants';

// Constants
import { ScreenNames } from '@repo/constants';

// Stores
import { useStore } from '@repo/stores';

// Hooks
import { useProductSearch } from '@repo/hooks';

// Styles
import styles from './styles';

const Search = () => {
  // Stores
  const currentSearchValue = useStore.use.currentSearchValue();

  // Queries
  const {
    data: products,
    isSuccess,
    refetch,
  } = useProductSearch(currentSearchValue);

  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, ScreenNames.search>
    >();

  useEffect(() => {
    if (currentSearchValue) {
      refetch();
    }
  }, [currentSearchValue]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackIcon color={colors.text.secondary} onPress={handleGoBack} />
        <SearchBar currentSearchValue={currentSearchValue} />
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
