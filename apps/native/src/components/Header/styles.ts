import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
  },
  backIconWrapper: {
    position: 'absolute',
    justifyContent: 'center',
  },
  backIcon: { left: 15 },
  title: {
    flex: 1,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
});

export default styles;
