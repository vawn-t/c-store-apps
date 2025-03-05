import { View } from 'react-native';

// Components
import { Header, Typography } from '@repo/ui';

// Types
import { FontWeight, SizeType, TypoVariant } from '@repo/ui';

// Styles
import styles from './styles';

interface IProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const VerificationLayout = ({ description, children, title }: IProps) => {
  return (
    <>
      <View style={styles.main}>
        <View style={styles.content}>
          <Typography
            variant={TypoVariant.Paragraph2}
            size={SizeType.Xl}
            fontWeight={FontWeight.Medium}
          >
            {title}
          </Typography>

          <Typography style={styles.description}>{description}</Typography>
        </View>
        <View>{children}</View>
      </View>
    </>
  );
};

export default VerificationLayout;
