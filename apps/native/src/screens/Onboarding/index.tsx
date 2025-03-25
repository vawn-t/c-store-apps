import { useCallback, useEffect, useRef, useState } from 'react';
import * as Contacts from 'expo-contacts';
import {
  Alert,
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

const Splash = () => {
  const [currentActiveSlide, setCurrentActiveSlide] = useState(0);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          const contact = data[0];
          console.log(contact);
          Alert.alert('Contact one', `Name: ${contact.name}`);
        }
      }
    })();
  }, []);

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
        <Footer activeSlideIndex={currentActiveSlide} slides={slides} />
      </View>
    </View>
  );
};

export default Splash;
