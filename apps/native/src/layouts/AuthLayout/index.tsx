import { ReactNode, memo, useCallback } from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  KeyboardAvoidingView,
  View,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import {
  FontWeight,
  SizeType,
  Typography,
  Header,
  TypoVariant,
} from '@repo/ui';

// Styles
import styles from './styles';

// Types
import { RootStackParamList } from '@repo/constants';

// Constants
import { ScreenNames } from '@repo/constants';

interface IProps {
  children: ReactNode;
  description: string;
  image: ImageSourcePropType;
  title: string;
  isLogin?: boolean;
}

const AuthLayout = ({
  children,
  description,
  title,
  image,
  isLogin = false,
}: IProps) => {
  const { width } = useWindowDimensions();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigateTo = useCallback(() => {
    if (isLogin) {
      navigation.navigate(ScreenNames.SignUp);
    } else {
      navigation.navigate(ScreenNames.Login);
    }
  }, [navigation]);

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <SafeAreaView style={[{ width }, styles.contentWrapper]}>
          <Header title="Welcome" />

          <View style={styles.drawer}>
            <Typography
              fontWeight={FontWeight.SemiBold}
              size={SizeType.Xl}
              variant={TypoVariant.Paragraph2}
            >
              {title}
            </Typography>

            <Typography>{description}</Typography>

            <View style={styles.childrenWrapper}>{children}</View>

            <View style={styles.footer}>
              <Typography>{`${
                isLogin ? `Don't have an account` : 'Already have an account'
              } ?`}</Typography>
              <Typography
                variant={TypoVariant.Paragraph2}
                onPress={handleNavigateTo}
              >{`${isLogin ? 'Sign up' : 'Login'}`}</Typography>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default memo(AuthLayout);
