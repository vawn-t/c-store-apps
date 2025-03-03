// Components
import { LoginForm } from '@repo/ui';

// Layouts
import { AuthLayout } from '@layouts';

// Images
import { Images } from '@assets/images';

const Login = () => (
  <AuthLayout
    title="Welcome back !"
    description="Sign in to your account"
    image={Images.loginBackground}
    isLogin
  >
    <LoginForm />
  </AuthLayout>
);

export default Login;
