import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import { ForgotPasswordForm } from '@repo/ui';

// Layouts
import { VerificationLayout } from '@layouts';

// Styles
import styles from './styles';
import { useCallback } from 'react';
import { useRouter } from 'expo-router';
import Toast from 'react-native-root-toast';
import { APP_ROUTES, SUCCESS } from '@repo/constants';

const ForgotPassword = () => {
  const router = useRouter();

  const handleSuccess = useCallback((message: string) => {
    Toast.show(SUCCESS.passwordSentToEmail(message));

    router.navigate(APP_ROUTES.AUTH_LOGIN);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <VerificationLayout title="Forgot Password" description="Coming soon!">
        <ForgotPasswordForm onSuccess={handleSuccess} onError={Toast.show} />
      </VerificationLayout>
    </SafeAreaView>
  );
};

export default ForgotPassword;
