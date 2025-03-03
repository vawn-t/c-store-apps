import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import { OtpForm } from '@repo/ui';

// Layouts
import { VerificationLayout } from '@layouts';

// Styles
import styles from './styles';

const VerifyNumber = () => (
  <SafeAreaView style={styles.container}>
    <VerificationLayout
      header="Verify Number"
      title="Verify your number"
      description="Enter your OTP code below"
      FormComponent={OtpForm}
    />
  </SafeAreaView>
);

export default VerifyNumber;
