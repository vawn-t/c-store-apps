import { memo, useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';

// Themes
import { colors } from '@themes';

// Components
import { Typography, BackIcon } from '@components';

// Types
import { SizeType } from '@interfaces';

// Styles
import styles from './styles';

const Header = ({}) => {
  const handleGoBack = useCallback(() => {
    // if (navigation.canGoBack()) {
    //   navigation.goBack();
    // }
  }, []);

  const headerTitleStyle = {};

  const title = 'Shopping Cart';

  return (
    <View style={styles.header}>
      {title && (
        <Typography
          style={[styles.title, headerTitleStyle]}
          size={SizeType.Large}
        >
          {title}
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
