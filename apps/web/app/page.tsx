'use client';

import localFont from 'next/font/local';
import {
  FontWeight,
  Typography,
  Button,
  ToastProvider,
  useToast,
} from '@repo/ui';

import styles from '../styles/index.module.css';
import { API_URL } from '@repo/constants';
import { useEffect } from 'react';

const poppins = localFont({
  src: [
    {
      path: '../assets/fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../assets/fonts/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'semi-bold',
    },
    {
      path: '../assets/fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
});

const Component = () => {
  const toast = useToast();

  useEffect(() => {
    toast.show('Hello World');
  }, []);

  return (
    <div>
      <Typography fontWeight={FontWeight.Bold}> Native</Typography>
      <Button onPress={() => console.log(123)}>123</Button>
    </div>
  );
};

export default function Web() {
  console.log('API_URL', API_URL);

  return (
    <ToastProvider>
      <div className={poppins.className}>
        {/* <div className={styles.container}>
          <h1 style={{ fontWeight: 500 }}>Web</h1>
          <Typography fontWeight={FontWeight.Bold}> Native</Typography>
          <Button onPress={() => console.log(123)}>123</Button>
        </div> */}
        <Component />
      </div>
    </ToastProvider>
  );
}
