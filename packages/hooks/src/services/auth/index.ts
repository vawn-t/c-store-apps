// Constants
import { ROUTES, SECURE_STORE } from '@repo/constants';

// Services
import { POST } from '@services/clientRequest';

// Types
import { LoginResponse, SignUpResponse } from './type';
import type { LoginFormData, SignUpFormData } from '@repo/models';
import { getValueFor } from '@repo/utils';

export const login = (formData: LoginFormData) =>
  POST<LoginResponse>(ROUTES.AUTH.LOGIN, formData);

export const signUp = async (formData: SignUpFormData) =>
  await POST<SignUpResponse>(ROUTES.AUTH.SIGNUP, formData);

export const verifyCode = async (code: string) => {
  const otpToken = await getValueFor(SECURE_STORE.OTP_TOKEN);

  if (!otpToken) {
    throw Error('You are not authorized');
  }

  return await POST(
    ROUTES.AUTH.VERIFY_CODE,
    { otp: code },
    { headers: { Authorization: otpToken } }
  );
};

export const resetPassword = async (email: string) =>
  await POST(ROUTES.AUTH.RESET_PASSWORD, { email });

export const resendOtp = async (phone: string) =>
  await POST(ROUTES.AUTH.RESEND_OTP, { phone });
