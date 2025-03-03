import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import { FontWeight, SizeType, Typography, TypoVariant } from '@repo/ui';
import { Header } from '@repo/ui';

// Types

// Constants
import { ALERT } from '@repo/constants';

// Styles
import styles from './styles';

const Favorite = () => (
  <SafeAreaView style={styles.safeArea}>
    <Header isDarkText />
    <View style={styles.container}>
      <Typography
        variant={TypoVariant.Paragraph2}
        size={SizeType.Xxl}
        fontWeight={FontWeight.Bold}
      >
        Favorite screen
      </Typography>
      <Typography>{ALERT.COMING_SOON}</Typography>
    </View>
  </SafeAreaView>
);

export default Favorite;
