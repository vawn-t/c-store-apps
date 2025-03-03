import { colors } from '@repo/ui';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  contentWrapper: {
    flex: 1,
  },
  drawer: {
    backgroundColor: colors.background.dark,
    borderTopEndRadius: 10,
    borderStartStartRadius: 10,
    bottom: 0,
    paddingVertical: 30,
    paddingHorizontal: 15,
    position: 'absolute',
    rowGap: 10,
    width: '100%',
  },
  footer: {
    alignItems: 'center',
    columnGap: 5,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  childrenWrapper: {
    paddingVertical: 10,
  },
});

export default styles;
