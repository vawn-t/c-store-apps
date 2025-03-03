import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Layouts
import { AuthLayout } from '@layouts';

// Types

// Constants
import { RootStackParamList, ScreenNames } from '@repo/constants';

// Components
import { Button, UserIcon } from '@repo/ui';

// Images
import { Images } from '@assets/images';

const FirstTimeLogin = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, ScreenNames.FirstTimeLogin>
    >();

  const handleNavigate = useCallback(() => {
    navigation.navigate(ScreenNames.SignUp);
  }, []);

  return (
    <AuthLayout
      description="Lorem ipsum dolorr sit amet, consetetur 
    sadipscing elitr, sed diam nonumy"
      title="Welcome"
      image={Images.firstTimeLogin}
    >
      <Button icon={<UserIcon />} onPress={handleNavigate}>
        Create an account
      </Button>
    </AuthLayout>
  );
};

export default FirstTimeLogin;
