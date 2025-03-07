import { StyleSheet } from 'react-native';
import { colors } from '@repo/ui';

const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor: colors.background.primary,

    flex: 1,
  },
  container: {
    flex: 1,
  },

  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 15,
    paddingVertical: 30,
  },
  backIcon: {
    position: 'absolute',
    left: 0,
  },
});

export default styles;
