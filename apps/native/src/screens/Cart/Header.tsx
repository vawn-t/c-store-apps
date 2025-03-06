import { View } from 'react-native';

// Components
import { BackIcon } from '@repo/ui';
import { Typography } from '@repo/ui';

// Themes
import { colors } from '@repo/ui';

// Types
import { FontWeight, SizeType, TypoVariant } from '@repo/ui';

// Styles
import styles from './styles';

const Header = () => {
  const handleGoBack = () => {
    // navigation.goBack();
  };

  return (
    <View style={styles.headerContainer}>
      <BackIcon
        color={colors.text.secondary}
        style={styles.backIcon}
        onPress={handleGoBack}
      />
      <Typography
        variant={TypoVariant.Paragraph2}
        size={SizeType.Large}
        fontWeight={FontWeight.Medium}
      >
        Shopping Cart
      </Typography>
    </View>
  );
};

export default Header;
