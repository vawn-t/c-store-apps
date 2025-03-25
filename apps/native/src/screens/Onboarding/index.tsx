import { useCallback, useRef, useState } from 'react';
import {
  FlatList,
  View,
  ViewToken,
  ViewabilityConfigCallbackPairs,
  useWindowDimensions,
} from 'react-native';

// Components
import Slide from './Slide';
import Footer from './Footer';

// Mocks
import { slides } from '@mocks';

// Styles
import styles from './styles';
import Checkbox from 'expo-checkbox';

const Splash = () => {
  const [currentActiveSlide, setCurrentActiveSlide] = useState(0);
  const [isChecked, setChecked] = useState(false);

  const { height } = useWindowDimensions();

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 100,
    waitForInteraction: true,
  };

  const onViewableItemsChanged = useCallback(
    ({ changed }: { changed: Array<ViewToken> }) => {
      if (
        changed &&
        changed.length > 0 &&
        typeof changed[0].index === 'number'
      ) {
        setCurrentActiveSlide(changed[0].index);
      }
    },
    []
  );

  const viewabilityConfigCallbackPairs = useRef<ViewabilityConfigCallbackPairs>(
    [{ viewabilityConfig, onViewableItemsChanged }]
  );

  return (
    <View>
      <FlatList
        data={slides}
        horizontal
        contentContainerStyle={{ height }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => <Slide item={item} index={index} />}
        pagingEnabled
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <View style={styles.footerWrapper}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Footer activeSlideIndex={currentActiveSlide} slides={slides} />
      </View>
    </View>
  );
};

export default Splash;
