// Components
import { LoginForm } from '@repo/ui';

// Layouts
import { AuthLayout } from '@layouts';

// Images
import { Images } from '@assets/images';
import Toast from 'react-native-root-toast';
import { useRouter } from 'expo-router';
import { APP_ROUTES, SUCCESS } from '@repo/constants';
import { useCallback } from 'react';

const Login = () => {
  const router = useRouter();

  const handleSuccess = useCallback(() => {
    Toast.show(SUCCESS.LOGIN);

    router.navigate(APP_ROUTES.POST_AUTH_STACK);
  }, []);

  const handleError = useCallback((message: string) => {
    Toast.show(message);
  }, []);

  const handleNavigateToForgotPassword = useCallback(() => {
    router.navigate(APP_ROUTES.AUTH_FORGOT_PASSWORD);
  }, []);

  return (
    <AuthLayout
      title="Welcome back !"
      description="Sign in to your account"
      image={Images.loginBackground}
      isLogin
    >
      <LoginForm
        onError={handleError}
        onSuccess={handleSuccess}
        onForgotPassword={handleNavigateToForgotPassword}
      />
    </AuthLayout>
  );
};

export default Login;
