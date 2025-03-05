import { useCallback } from 'react';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

// Constants
import { APP_ROUTES, SUCCESS } from '@repo/constants';

// Components
import { OtpForm, useToast } from '@repo/ui';

// Layouts
import { VerificationLayout } from '@layouts';

// Hooks
import type { VerifyCodeError } from '@repo/hooks';

// Styles
import styles from './styles';

const VerifyNumber = () => {
  const router = useRouter();
  const toast = useToast();

  const handleSuccess = useCallback(() => {
    toast.show(SUCCESS.SIGNUP.VERIFIED);
    router.navigate(APP_ROUTES.AUTH_LOGIN);
  }, []);

  const handleError = useCallback((error?: VerifyCodeError) => {
    if (error?.errors.length) {
      toast.show(error.errors[0].msg);
    }
  }, []);

  const handleResendOTPResult = useCallback((message: string) => {
    toast.show(message);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <VerificationLayout
        title="Verify your number"
        description="Enter your OTP code below"
      >
        <OtpForm
          onSuccess={handleSuccess}
          onError={handleError}
          onResendOTPResult={handleResendOTPResult}
        />
      </VerificationLayout>
    </SafeAreaView>
  );
};

export default VerifyNumber;
