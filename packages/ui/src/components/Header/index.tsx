import { memo, useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';
import type { NativeStackHeaderProps } from '@react-navigation/native-stack';

// Themes
import { colors } from '@themes';

// Components
import { Typography, BackIcon } from '@components';

// Types
import { SizeType } from '@interfaces';

// Styles
import styles from './styles';

interface IProps extends NativeStackHeaderProps {}

const Header = ({
  options: { title, headerTitleStyle },
  navigation,
}: NativeStackHeaderProps) => {
  const handleGoBack = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }, [navigation]);

  return (
    <View style={styles.header}>
      {title && (
        <Typography
          style={[styles.title, headerTitleStyle]}
          size={SizeType.Large}
        >
          {title}{' '}
        </Typography>
      )}
      <View style={styles.backIconWrapper}>
        <TouchableOpacity
          testID="back-icon"
          onPress={handleGoBack}
          hitSlop={{ top: 20, left: 20, right: 20, bottom: 20 }}
        >
          <BackIcon style={styles.backIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
