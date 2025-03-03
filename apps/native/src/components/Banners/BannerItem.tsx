import { ImageBackground } from 'react-native';

// Models
import { Slide } from '@repo/models';

// Components
import { FontWeight, SizeType, TypoVariant, Typography } from '@repo/ui';

// Styles
import styles from './styles';

interface IProps {
  item: Slide;
  width: number;
}

const BannerItem = ({ item, width }: IProps) => (
  <ImageBackground
    source={item.image}
    style={[styles.bannerContainer, { width }]}
    resizeMode="cover"
  >
    <Typography
      style={styles.text}
      size={SizeType.Large}
      variant={TypoVariant.Paragraph2}
      fontWeight={FontWeight.SemiBold}
    >
      {item.title}
    </Typography>
  </ImageBackground>
);

export default BannerItem;
