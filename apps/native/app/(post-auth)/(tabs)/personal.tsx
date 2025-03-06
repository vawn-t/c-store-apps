import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ALERT } from '@repo/constants';
import { Typography, TypoVariant, FontWeight, SizeType } from '@repo/ui';

export default function PersonalScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Typography
          variant={TypoVariant.Paragraph2}
          size={SizeType.Xxl}
          fontWeight={FontWeight.Bold}
        >
          Personal screen
        </Typography>
        <Typography>{ALERT.COMING_SOON}</Typography>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
