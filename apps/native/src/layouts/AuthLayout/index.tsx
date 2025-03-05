import { ReactNode, memo } from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  KeyboardAvoidingView,
  View,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import { FontWeight, SizeType, Typography, TypoVariant } from '@repo/ui';

// Styles
import styles from './styles';

// Types
import { APP_ROUTES } from '@repo/constants';

// Constants
import { Link } from 'expo-router';

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

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <SafeAreaView style={[{ width }, styles.contentWrapper]}>
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
              <Link
                href={isLogin ? APP_ROUTES.AUTH_SIGNUP : APP_ROUTES.AUTH_LOGIN}
                asChild
              >
                <Typography
                  variant={TypoVariant.Paragraph2}
                >{`${isLogin ? 'Sign up' : 'Login'}`}</Typography>
              </Link>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default memo(AuthLayout);
