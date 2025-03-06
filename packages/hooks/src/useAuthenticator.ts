import axios from 'axios';
import { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Types
import type {
  LoginFormData,
  LoginFormErrors,
  SignUpFormData,
  SignUpFormErrors,
} from '@repo/models';

// Stores
import { useStore } from '@repo/stores';

// Hooks
import useAuthLogin from './useAuth/useAuthLogin';

// Constants
import { RootStackParamList, SECURE_STORE, ScreenNames } from '@repo/constants';

// Utils
import { save, validateLoginForm, validateSignUpForm } from '@repo/utils';
import useAuthSignUp from './useAuth/useAuthSignUp';

const useAuthenticator = () => {
  const [errors, setErrors] = useState<SignUpFormErrors | LoginFormErrors>({});

  // Stores
  const setPhone = useStore.use.setPhone();
  const disableLoading = useStore.use.disableLoading();
  const enableLoading = useStore.use.enableLoading();

  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, ScreenNames.Login>
    >();

  const { mutateAsync: loginAsync, isPending: isLoginPending } = useAuthLogin();

  const { mutateAsync: signUpAsync, isPending: isSignUpPending } =
    useAuthSignUp();

  const login = useCallback(
    (
      formData: LoginFormData,
      onSuccess: () => void,
      onError: (message: string) => void
    ) => {
      const { errors, isFormValid } = validateLoginForm(formData);

      setErrors(errors);

      if (!isFormValid) {
        // Show the first error on Toast
        onError(Object.values(errors)[0] as string);

        return;
      }

      loginAsync(formData, {
        onSuccess: (data) => {
          // save auth token to secure store
          save(SECURE_STORE.AUTH_TOKEN, data.token);

          axios.defaults.headers.common['Authorization'] = data.token;

          navigation.navigate(ScreenNames.HomeStack);

          disableLoading();

          onSuccess();
        },
        onError: (error) => {
          axios.defaults.headers.common['Authorization'] = '';

          if (error.response?.data.errors?.length) {
            onError(error.response.data.errors[0].msg);
          } else {
            onError(error.message);
          }

          disableLoading();
        },
      });
      enableLoading();
    },
    [loginAsync, validateLoginForm]
  );

  /**
   * Handles the sign-up process by validating the form data, showing errors if any,
   * and calling the asynchronous sign-up function. Displays success or error messages
   * using Toast notifications and manages loading state.
   *
   * @param {SignUpFormData} formData - The data from the sign-up form.
   * @param {(message: string) => void} onSuccess - Callback function to be called on successful sign-up.
   *
   * @returns {void}
   */
  const signUp = useCallback(
    (
      formData: SignUpFormData,
      onSuccess: (message: string) => void,
      onError: (message: string) => void
    ) => {
      const { errors, isFormValid } = validateSignUpForm(formData);

      setErrors(errors);

      if (!isFormValid) {
        // Show the first error on Toast
        console.error(Object.values(errors)[0] as string);
        return;
      }

      setPhone(formData.phone);

      enableLoading();

      signUpAsync(formData, {
        onSuccess: (data) => {
          // save otp token to secure store
          save(SECURE_STORE.OTP_TOKEN, data.token);

          console.log('OTP_TOKEN', data.token);

          disableLoading();

          onSuccess(formData.email);
        },
        onError: (error) => {
          axios.defaults.headers.common['Authorization'] = '';

          if (error.response?.data.errors?.length) {
            onError(error.response?.data.errors[0].msg);
          } else {
            onError(error.message);
          }

          disableLoading();
        },
      });
    },
    [signUpAsync, validateSignUpForm]
  );

  const clearEmailError = useCallback(() => {
    setErrors((prevErrors) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { email: omitted, ...rest } = prevErrors;
      return rest;
    });
  }, []);

  const clearPasswordError = useCallback(() => {
    setErrors((prevErrors) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: omitted, ...rest } = prevErrors;
      return rest;
    });
  }, []);

  const clearPhoneNumberError = useCallback(() => {
    setErrors((prevErrors) => {
      if ('phoneNumber' in prevErrors) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { phoneNumber: omitted, ...rest } = prevErrors;
        return rest;
      }
      return prevErrors;
    });
  }, []);

  return {
    isLoading: isLoginPending || isSignUpPending,
    errors,
    login,
    signUp,
    clearEmailError,
    clearPasswordError,
    clearPhoneNumberError,
  };
};

export default useAuthenticator;
