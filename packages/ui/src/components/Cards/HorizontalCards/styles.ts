import { StyleSheet, Platform } from 'react-native';
import { colors } from '@themes';

const itemWrapperBg = Platform.select({
  web: colors.background.dark,
  default: colors.background.primary,
});

const styles = StyleSheet.create({
  button: {
    cursor: 'pointer',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  baseTitle: {
    textAlign: 'center',
  },
  cartText: {
    paddingLeft: 10,
  },
  quantityWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  minus: {
    cursor: 'pointer',
    alignSelf: 'flex-start',
  },
  add: {
    cursor: 'pointer',
    alignSelf: 'flex-end',
  },

  container: {
    paddingVertical: 20,
    gap: 20,
  },

  row: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
    columnGap: 20,
  },

  itemWrapper: {
    backgroundColor: itemWrapperBg,
    width: 180,

    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
    borderRadius: 5,
    overflow: 'hidden',
  },
  content: {
    alignItems: 'center',
    overflow: 'visible',
  },
  price: {
    color: colors.text.dark,
    textAlign: 'center',
  },
  name: {
    textAlign: 'center',
    paddingVertical: 5,
  },
  amount: {
    textAlign: 'center',
  },
  top: {
    borderColor: colors.border,
    borderBottomWidth: 1,
    flex: 5,
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 30,
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
    height: 40,
  },
  circle: {
    backgroundColor: colors.primary.main,
    borderRadius: 84 / 2,
    width: 84,
    height: 84,
    position: 'absolute',
    top: -20,
  },
  image: {
    transform: [{ scale: 1.2 }],
    width: 84,
    height: 84,
    objectFit: 'contain',
  },
  favoriteIcon: {
    cursor: 'pointer',
    position: 'absolute',
    right: 10,
    top: 10,
  },
});

export default styles;
