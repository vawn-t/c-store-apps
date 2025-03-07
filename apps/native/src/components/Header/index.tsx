import { useCallback } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

// Components
import { Typography, BackIcon, SizeType } from '@repo/ui';

// Styles
import styles from './styles';

const Header = ({
  navigation,
  options: { title, headerTitleStyle, headerStyle },
}: NativeStackHeaderProps) => {
  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const color = StyleSheet.flatten(headerTitleStyle).color;

  return (
    <View style={[styles.header, headerStyle]}>
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
          <BackIcon style={[styles.backIcon]} color={color} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
