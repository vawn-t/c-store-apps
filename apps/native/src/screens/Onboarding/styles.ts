import { StyleSheet } from 'react-native';
import { colors } from '@repo/ui';

const styles = StyleSheet.create({
  footerWrapper: {
    position: 'absolute',
    bottom: 50,
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1,
  },
  content: {
    rowGap: 10,
  },
  title: { paddingHorizontal: 50, textAlign: 'center' },
  description: { paddingHorizontal: 30, paddingTop: 10, textAlign: 'center' },
  imageWrapper: { alignItems: 'center' },

  footerContainer: {
    rowGap: 32,
    paddingHorizontal: 20,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    columnGap: 5,
  },
  indicator: {
    backgroundColor: colors.primary.main,
    borderRadius: 4,
    width: 8,
    height: 8,
  },
});

export default styles;
