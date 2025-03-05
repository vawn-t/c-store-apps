import { StyleSheet } from 'react-native';
import { colors } from '@repo/ui';

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.background.dark,
    flex: 1,
  },
  circle: {
    backgroundColor: colors.primary.light,
    borderRadius: 200,
    height: 400,
    width: 400,
    position: 'absolute',
    transform: [
      {
        scale: 1.2,
      },
      { translateY: -100 },
    ],
  },
  container: {
    backgroundColor: colors.background.primary,
    flex: 1,
  },
  image: {
    flex: 1,
    marginHorizontal: 40,
    objectFit: 'contain',
  },
});

export default styles;
