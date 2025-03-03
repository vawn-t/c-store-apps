import { View } from 'react-native';

// Components
import { Header, Typography } from '@repo/ui';

// Types
import { FontWeight, SizeType, TypoVariant } from '@repo/ui';

// Styles
import styles from './styles';

interface IProps {
  header: string;
  title: string;
  description: string;
  FormComponent: React.ComponentType;
}

const VerificationLayout = ({
  description,
  FormComponent,
  header,
  title,
}: IProps) => {
  return (
    <>
      <Header isDarkText title={header} />
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
        <View>
          <FormComponent />
        </View>
      </View>
    </>
  );
};

export default VerificationLayout;
