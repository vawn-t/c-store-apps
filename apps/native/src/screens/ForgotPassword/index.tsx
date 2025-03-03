import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import { ForgotPasswordForm } from '@repo/ui';

// Layouts
import { VerificationLayout } from '@layouts';

// Styles
import styles from './styles';

const ForgotPassword = () => (
  <SafeAreaView style={styles.container}>
    <VerificationLayout
      header="Forgot Password"
      title="Forgot Password"
      description="Lorem ipsum dolor sit amet, consetetur 
			sadipscing elitr, sed diam nonumy"
      FormComponent={ForgotPasswordForm}
    />
  </SafeAreaView>
);

export default ForgotPassword;
