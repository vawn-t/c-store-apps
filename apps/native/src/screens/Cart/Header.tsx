import { View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Constants
import { RootStackParamList, ScreenNames } from '@repo/constants';

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
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, ScreenNames.Cart>
    >();

  const handleGoBack = () => {
    navigation.goBack();
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
