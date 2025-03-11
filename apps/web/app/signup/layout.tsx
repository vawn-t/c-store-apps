import { Metadata } from 'next';
import { ReactNode } from 'react';

import { METADATA } from '@constants';

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: METADATA.SIGN_UP.title,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function SignUpLayout({ children }: Props) {
  return <>{children}</>;
}
