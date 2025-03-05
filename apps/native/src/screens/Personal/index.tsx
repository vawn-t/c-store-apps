import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import { Typography } from '@repo/ui';
import { Header } from '@repo/ui';

// Types
import { FontWeight, SizeType, TypoVariant } from '@repo/ui';

// Constants
import { ALERT } from '@repo/constants';

// Styles
import styles from './styles';

const Personal = () => (
  <SafeAreaView style={styles.safeArea}>
    <Header isDarkText />
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

export default Personal;
