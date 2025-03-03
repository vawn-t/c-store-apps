import { SignUpForm } from '@repo/ui';
import { AuthLayout } from '@layouts';

// Images
import { Images } from '@assets/images';

const SignUp = () => (
  <AuthLayout
    description="Quickly create account"
    title="Create account"
    image={Images.signupBackground}
  >
    <SignUpForm />
  </AuthLayout>
);

export default SignUp;
