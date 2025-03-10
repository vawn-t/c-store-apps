import { ReactNode } from 'react';

import { FontWeight, SizeType, Typography } from '@repo/ui';
import styles from './styles.module.css';

interface Props {
  children: ReactNode;
  title: string;
}

const AuthLayout = ({ children, title }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <Typography size={SizeType.Xxl} fontWeight={FontWeight.Bold}>
          {title}
        </Typography>
        <div className={styles.formWrapper}>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
