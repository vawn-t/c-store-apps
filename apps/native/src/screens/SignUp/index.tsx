import { useCallback } from 'react';
import { useRouter } from 'expo-router';
import { SignUpForm } from '@repo/ui';
import { AuthLayout } from '@layouts';

// Images
import { Images } from '@assets/images';
import { APP_ROUTES, SUCCESS } from '@repo/constants';
import Toast from 'react-native-root-toast';

const SignUp = () => {
  const router = useRouter();

  const handleSignUpSuccess = useCallback((message: string) => {
    Toast.show(SUCCESS.sentCodeToEmail(message));

    router.navigate(APP_ROUTES.AUTH_SIGNUP_VERIFY_CODE);
  }, []);

  const handleSignUpError = useCallback((message: string) => {
    Toast.show(message);
  }, []);

  return (
    <AuthLayout
      description="Quickly create account"
      title="Create account"
      image={Images.signupBackground}
    >
      <SignUpForm onSuccess={handleSignUpSuccess} onError={handleSignUpError} />
    </AuthLayout>
  );
};

export default SignUp;
