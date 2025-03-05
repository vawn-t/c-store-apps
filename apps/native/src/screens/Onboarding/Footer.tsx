import { memo } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { Link } from 'expo-router';

// Constants
import { APP_ROUTES } from '@repo/constants';

// Models
import type { Slide } from '@repo/models';

// Components
import { Button, colors } from '@repo/ui';

// Utils
import { areEqual } from '@repo/utils';

// Styles
import styles from './styles';

interface IProps {
  slides: Slide[];
  activeSlideIndex: number;
}

const Footer = ({ slides, activeSlideIndex }: IProps) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.footerContainer, { width: width }]}>
      <View style={styles.indicatorContainer}>
        {slides.map((slide, index) => (
          <View
            style={[
              styles.indicator,
              {
                backgroundColor:
                  index === activeSlideIndex
                    ? colors.primary.main
                    : colors.background.dark,
              },
            ]}
            key={slide.title}
          />
        ))}
      </View>
      <Link href={APP_ROUTES.AUTH_STACK} asChild>
        <Button>Next</Button>
      </Link>
    </View>
  );
};

export default memo(Footer, areEqual);
