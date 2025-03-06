import { useCallback } from 'react';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import { ForgotPasswordForm, useToast } from '@repo/ui';

// Layouts
import { VerificationLayout } from '@layouts';

// Styles
import styles from './styles';
import { ALERT, APP_ROUTES, SUCCESS } from '@repo/constants';

const ForgotPassword = () => {
  const toast = useToast();
  const router = useRouter();

  const handleSuccess = useCallback((message: string) => {
    toast.show(SUCCESS.passwordSentToEmail(message));

    router.navigate(APP_ROUTES.AUTH_LOGIN);
  }, []);

  const handleError = useCallback((message: string) => {
    toast.show({ message, type: 'error' });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <VerificationLayout
        title="Forgot Password"
        description={ALERT.COMING_SOON}
      >
        <ForgotPasswordForm onSuccess={handleSuccess} onError={handleError} />
      </VerificationLayout>
    </SafeAreaView>
  );
};

export default ForgotPassword;
